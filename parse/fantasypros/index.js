const axios = require('axios')
const { JSDOM } = require('jsdom')

const url = 'https://www.fantasypros.com/nfl/rankings/half-point-ppr-cheatsheets.php'

async function getData () {
  const { data } = await axios.get(url)
  const { document } = (new JSDOM(data)).window
  return parse(document)
}

getData()

function parse (document) {
  const players = document.querySelectorAll('tr[class*=mpb-player-]')

  let rankedArr = []
  let rankedObj = {}

  for (var i = 0; i < 300; i++) {
    const player = players[i]
    const cells = player.querySelectorAll('td')
    const name = cells[1].firstElementChild.textContent.replace(' Jr.', '')
    const nameKey = name.replace(/[^0-9a-z]/gi, '').toLowerCase()
    const pos = cells[2].textContent.replace(/[^a-z]/gi, '')
    rankedArr[rankedArr.length] = nameKey
    rankedObj[nameKey] = {
      rank: [ parseFloat(cells[0].textContent) ],
      name: name,
      team: cells[1].firstElementChild.nextElementSibling.textContent,
      pos: pos === 'DST' ? 'DEF' : pos,
      adp: [ parseFloat(cells[8].textContent) ],
    }
  }

  return {
    array: rankedArr,
    object: rankedObj
  }
}

module.exports = getData
