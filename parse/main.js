const fs = require('fs')

const baseRankings = fs.readFileSync('./scout-dot-com/rankings.json').toString()

const rankingsJSON = JSON.parse(baseRankings)

const transformedRankings = {
  array: rankingsJSON.array,
  object: rankingsJSON.array.reduce((list, playerName) => {
    const playerObj = Object.assign({}, rankingsJSON.object[playerName])
    playerObj.adp = playerObj.adp[0]
    playerObj.rank = playerObj.rank[0]
    playerObj.projected = playerObj.projected[0]
    list[playerName] = playerObj
    return list
  }, {})
}

console.log(transformedRankings);

fs.writeFileSync('rankings.json', JSON.stringify(transformedRankings))
