let homeCount = 0
let guestCount = 0

function incrementHomeOne(){
homeCount += 1
document.getElementById("home-box").textContent = homeCount

}
function incrementHomeTwo(){
homeCount += 2
document.getElementById("home-box").textContent = homeCount

}
function incrementHomeThree(){
homeCount += 3
document.getElementById("home-box").textContent = homeCount

}
function incrementGuestOne(){
guestCount += 1
document.getElementById("guest-box").textContent = guestCount

}
function incrementGuestTwo(){
guestCount += 2
document.getElementById("guest-box").textContent = guestCount

}
function incrementGuestThree(){
guestCount += 3
document.getElementById("guest-box").textContent = guestCount

}

function newGameHome(){
    homeCount = 0
    document.getElementById("home-box").textContent = homeCount
}
function newGameGuest(){
    guestCount = 0
    document.getElementById("guest-box").textContent = guestCount
}