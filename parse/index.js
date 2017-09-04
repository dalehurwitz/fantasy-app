const fs = require('fs')
const dedupe = require('dedupe')
const getScoutData = require('./scout-dot-com')
const getFantasyData = require('./fantasypros')

async function parseData () {
  const scoutData = await getScoutData()
  const fantasyProsData = await getFantasyData()

  let combinedArray = dedupe(scoutData.array.concat(fantasyProsData.array))
  let combinedObject = combinedArray.reduce((list, playerName) => {
    const player = fantasyProsData.object[playerName]
    const listPlayer = list[playerName]

    if (!player) return list

    if (!listPlayer) {
      list[playerName] = player
      return list
    }

    if (player.adp && player.adp !== 0) {
      listPlayer.adp = listPlayer.adp.concat(player.adp)
    }

    if (player.rank) {
      listPlayer.rank = listPlayer.rank.concat(player.rank)
    }

    if (player.projected) {
      listPlayer.projected = listPlayer.projected.concat(player.projected)
    }

    if (player.bye && !listPlayer.bye) {
      listPlayer.bye = player.bye
    }

    return list

  }, scoutData.object)

  // average all array fields
  combinedArray.forEach((playerName) => {
    const player = combinedObject[playerName]

    for (let field in player) {
      if (Array.isArray(player[field])) {
        player[field] = arrayAverage(player[field])
      }
    }
  })

  fs.writeFileSync('../data/rankings.json', JSON.stringify({
    array: combinedArray,
    object: combinedObject
  }))
}

function arrayAverage (array) {
  const average = (array.reduce((prev, val) => {
    return prev + val
  }, 0) / array.length).toFixed(2)
  return parseFloat(average)
}

parseData()
