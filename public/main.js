let teams1Score = 0
let teams2Score = 0
// let teamsName1 = ''
// let teamsName2 = ''

const updateTeamScore = () => {
  document.querySelector('.team1Score').textContent = teams1Score
}
const updateTeam2Score = () => {
  document.querySelector('.team2Score').textContent = teams2Score
}

const buttonTeamScore1 = () => {
  console.log('button was clicked')
  teams1Score += 1
  updateTeamScore()
}
const buttonTeamScore2 = () => {
  console.log('button3 was clicked')
  teams2Score += 1
  updateTeam2Score()
}

const buttonTeamScoreSub1 = () => {
  console.log('button2 was clicked')
  teams1Score -= 1
  updateTeamScore()
}
const buttonTeam2ScoreSub = () => {
  console.log('button4was clicked')
  teams2Score -= 1
  updateTeam2Score()
}

const updateTeam1 = () => {
  const team1 = document.querySelector('.team-name1').value
  console.log(team1)
  document.querySelector('.teamName1').textContent = team1
}

const updateTeam2 = () => {
  console.log('team 2 button was pushed')
  const team2 = document.querySelector('.team-name2').value
  document.querySelector('.teamName2').textContent = team2
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
