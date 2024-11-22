// init confetti const - jsconfetti is loaded in the html
const confetti = new JSConfetti()
const launchConfetti = function (count = 400) {
    confetti.addConfetti({
        confettiNumber: count
    })
}

var hours = Number(localStorage.getItem("hours"))
var mouseDownTimestamp
document.getElementById("numberItself").innerText = hours

document.addEventListener("mousedown", function () {
    confetti.addConfetti({
        emojis: ["🥁"],
        confettiNumber: 6
    })

    mouseDownTimestamp = Date.now()
    navigator.vibrate([50,50,50,50])
})

document.addEventListener("touchstart", function () {
    confetti.addConfetti({
        emojis: ["🥁"],
        confettiNumber: 6
    })

    mouseDownTimestamp = Date.now()
})

document.addEventListener("mouseup", function () {
    if (Date.now() - mouseDownTimestamp >= 1500) {
        launchConfetti()
        localStorage.setItem("hours",hours + 1)
        hours = Number(localStorage.getItem("hours"))
        document.getElementById("numberItself").innerText = hours
    }
})

document.addEventListener("touchend", function () {
    if (Date.now() - mouseDownTimestamp >= 1500) {
        launchConfetti()
        localStorage.setItem("hours",hours + 1)
        hours = Number(localStorage.getItem("hours"))
        document.getElementById("numberItself").innerText = hours
        navigator.vibrate([97,23,87,16,94,15,84,29,54,39,64,28,64,0,0,56,44,97,46,92,46,93])
    }
})
/*document.addEventListener("long-press", function () {
    launchConfetti()
    localStorage.setItem("hours",hours + 1)
    hours = Number(localStorage.getItem("hours"))
})*/

document.addEventListener("contextmenu", function (e) {
    e.preventDefault()
})