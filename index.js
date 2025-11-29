const homeScore = document.getElementById('home')
const guestScore = document.getElementById('guest')

let homePoints = 0
let guestPoints = 0 

function homeAdd1Score(){
    homePoints += 1
    homeScore.textContent = homePoints
}

function homeAdd2Score(){
     homePoints += 2
    homeScore.textContent = homePoints
}

function homeAdd3Score(){
     homePoints += 3
    homeScore.textContent = homePoints
}

function guestAdd1Score(){
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function guestAdd2Score(){
     guestPoints += 2
    guestScore.textContent = guestPoints
}

function guestAdd3Score(){
     guestPoints += 3
    guestScore.textContent = guestPoints
}

function newMatch(){
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints
}