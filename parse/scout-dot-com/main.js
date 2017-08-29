let players = document.querySelectorAll('.fantasy-ranking-row:not(.ad-row)')

let rankedObj = {}
let rankedArr = []

Array.prototype.forEach.call(players, function (player) {
  const name = player.querySelector('.name a').innerText.trim().toString()
  const nameKey = name.replace(/[^0-9a-z]/gi, '').toLowerCase()
  rankedArr[rankedArr.length] = nameKey
  rankedObj[nameKey] = {
    rank: [ parseFloat(player.querySelector('.playerRank').innerText) ],
    name: name,
    pos: player.querySelector('.pos').innerText.trim().toUpperCase(),
    team: player.querySelector('.team a').href.split('=')[1],
    adp: [ parseFloat(player.querySelector('.adp').innerText) ],
    projected: [ parseFloat(player.querySelector('.pts').innerText) ],
    bye: player.querySelector('.byeWeek').innerText,
    injury: player.querySelector('.injury').innerText
  }
})

const ranked = {
  array: rankedArr,
  object: rankedObj
}

console.log(ranked);

function hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}
