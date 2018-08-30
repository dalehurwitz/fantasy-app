const axios = require('axios')
const { JSDOM } = require('jsdom')

const url = 'https://www.fantasypros.com/nfl/rankings/half-point-ppr-cheatsheets.php'

const teamNames = {
  'Denver Broncos': 'Denver',
  'Seattle Seahawks': 'Seattle',
  'Houston Texans': 'Houston',
  'Kansas City Chiefs': 'Kansas City',
  'Minnesota Vikings': 'Minnesota',
  'Arizona Cardinals': 'Arizona',
  'New England Patriots': 'New England',
  'Carolina Panthers': 'Carolina',
  'New York Giants': 'New York Giants',
  'Jacksonville Jaguars': 'Jacksonville',
  'Los Angeles Rams': 'Los Angeles Rams',
  'Pittsburgh Steelers': 'Pittsburgh',
  'Baltimore Ravens': 'Baltimore',
  'Philadelphia Eagles': 'Philadelphia',
  'Cincinnati Bengals': 'Cincinnati',
  'Los Angeles Chargers': 'Los Angeles Chargers',
  'Green Bay Packers': 'Green Bay',
  'Oakland Raiders': 'Oakland',
  'Tampa Bay Buccaneers': 'Tampa Bay',
  'Atlanta Falcons': 'Atlanta',
  'Miami Dolphins': 'Miami',
  'Tennessee Titans': 'Tennessee',
  'Buffalo Bills': 'Buffalo',
  'Detroit Lions': 'Detroit',
  'Dallas Cowboys': 'Dallas',
  'Washington Redskins': 'Washington',
  'New York Jets': 'New York Jets',
  'Chicago Bears': 'Chicago',
  'Indianapolis Colts': 'Indianapolis',
  'Cleveland Browns': 'Cleveland',
  'New Orleans Saints': 'New Orleans',
  'San Francisco 49ers': 'San Francisco'
}

async function getData() {
  const { data } = await axios.get(url)
  const { document } = (new JSDOM(data)).window
  return parse(document)
}

getData()

function parse(document) {
  const allPlayers = document.querySelectorAll('tr[class*=mpb-player-]')
  // limit to 300 players
  const players = [].slice.call(allPlayers, 0, 300)

  let rankedArr = []
  let rankedObj = {}

  for (var i = 0; i < players.length; i++) {
    const player = players[i]
    const cells = player.querySelectorAll('td')
    let name = cells[1].firstElementChild.dataset.name.replace(' Jr.', '')
    name = teamNames[name] || name
    const nameKey = name.replace(/[^0-9a-z]/gi, '').toLowerCase()
    const pos = cells[3].textContent.replace(/[^a-z]/gi, '')
    rankedArr[rankedArr.length] = nameKey
    rankedObj[nameKey] = {
      id: nameKey,
      rank: [parseFloat(cells[0].textContent)],
      name: name,
      team: cells[1].firstElementChild.dataset.team,
      bye: cells[4].textContent,
      pos: pos === 'DST' ? 'DEF' : pos,
      adp: [parseFloat(cells[7].textContent)],
    }
  }

  return {
    array: rankedArr,
    object: rankedObj
  }
}

module.exports = getData
