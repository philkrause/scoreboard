let teams1Score = 0
let teams2Score = 0
let maxSec = 60
let maxMin = 1

const myTimer = () => {
  if (maxSec > 0 && maxMin >= 0) {
    maxSec -= 1
  }
  if (maxSec === 0 && maxMin > 0) {
    maxSec = 60
    maxMin -= 1
  }
  if (maxSec === 0 && maxMin === 0) {
    maxSec = 0
    maxMin = 0
  }
  document.querySelector('.timerSecond').textContent = maxSec
  document.querySelector('.timerMinute').textContent = maxMin
}
const oneSecondCount = setInterval(myTimer, 1000)

const updateTeam1 = () => {
  const team1 = document.querySelector('.team-name1').value
  document.querySelector('.teamName1').textContent = team1
}

const updateTeam2 = () => {
  const team2 = document.querySelector('.team-name2').value
  document.querySelector('.teamName2').textContent = team2
}

const buttonTeamScore1 = () => {
  teams1Score += 1
  document.querySelector('.team1Score').textContent = teams1Score
}
const buttonTeamScore2 = () => {
  teams2Score += 1
  document.querySelector('.team2Score').textContent = teams2Score
}

const buttonTeamScoreSub1 = () => {
  teams1Score -= 1
  document.querySelector('.team1Score').textContent = teams1Score
}
const buttonTeam2ScoreSub = () => {
  teams2Score -= 1
  document.querySelector('.team2Score').textContent = teams2Score
}
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', buttonTeamScore1)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', buttonTeamScoreSub1)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', buttonTeamScore2)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', buttonTeam2ScoreSub)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeam1)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeam2)
