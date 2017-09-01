const axios = require('axios')
const { JSDOM } = require('jsdom')

const url = 'http://fftoolbox.scout.com/football/rankings/index.php'

async function getData () {
  const { data } = await axios.get(url)
  const { document } = (new JSDOM(data)).window
  return parse(document)
}

function parse (document) {
  let players = document.querySelector('#results').querySelectorAll('.fantasy-ranking-row:not(.ad-row)')
  players = Array.prototype.slice.call(players, 1)
  let rankedObj = {}
  let rankedArr = []

  Array.prototype.forEach.call(players, function (player) {
    const name = player.querySelector('.name a').textContent.trim().toString()
    const nameKey = name.replace(/[^0-9a-z]/gi, '').toLowerCase()
    rankedArr[rankedArr.length] = nameKey
    rankedObj[nameKey] = {
      id: nameKey,
      rank: [ parseFloat(player.querySelector('.playerRank').textContent) ],
      name: name,
      pos: player.querySelector('.pos').textContent.trim().toUpperCase(),
      team: player.querySelector('.team a').href.split('=')[1],
      adp: [ parseFloat(player.querySelector('.adp').textContent) ],
      projected: [ parseFloat(player.querySelector('.pts').textContent) ],
      bye: player.querySelector('.byeWeek').textContent,
      injury: player.querySelector('.injury').textContent
    }
  })

  return {
    array: rankedArr,
    object: rankedObj
  }
}

module.exports = getData
