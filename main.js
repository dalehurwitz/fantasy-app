let players = document.querySelectorAll('.fantasy-ranking-row:not(.ad-row)')

let ranked = Array.prototype.map.call(players, function (player) {
  return {
    rank: [ parseFloat(player.querySelector('.playerRank').innerText) ],
    name: player.querySelector('.name').innerText.trim(),
    team: player.querySelector('.team a').href.split('=')[1],
    adp: [ parseFloat(player.querySelector('.adp').innerText) ],
    projected: [ parseFloat(player.querySelector('.pts').innerText) ],
    bye: player.querySelector('.byeWeek').innerText,
    injury: player.querySelector('.injury').innerText
  }
})

console.log(JSON.stringify(ranked))
