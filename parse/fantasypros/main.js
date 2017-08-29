const players = document.querySelectorAll('tr[class*=mpb-player-]')

let rankedArr = []
let rankedObj = {}

for (var i = 0; i < 300; i++) {
  const player = players[i]
  const cells = player.querySelectorAll('td')
  const name = cells[1].firstElementChild.innerText
  const nameKey = name.replace(/[^0-9a-z]/gi, '').toLowerCase()
  const pos = cells[2].innerText.replace(/[^a-z]/gi, '')
  rankedArr[rankedArr.length] = nameKey
  rankedObj[nameKey] = {
    rank: [ parseFloat(cells[0].innerText) ],
    name: name,
    team: cells[1].firstElementChild.nextElementSibling.innerText,
    pos: pos === 'DST' ? 'DEF' : pos,
    adp: [ parseFloat(cells[8].innerText) ],
  }
}

const ranked = {
  array: rankedArr,
  object: rankedObj
}

console.log(ranked);
