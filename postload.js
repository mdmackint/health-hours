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
const bignumberdiv = qs("#bignumber")

bignumberdiv.addEventListener("mousedown", function () {
    confetti.addConfetti({
        emojis: ["🥁"],
        confettiNumber: 6
    })

    mouseDownTimestamp = Date.now()
})

bignumberdiv.addEventListener("touchstart", function () {
    confetti.addConfetti({
        emojis: ["🥁"],
        confettiNumber: 6
    })

    mouseDownTimestamp = Date.now()
})

bignumberdiv.addEventListener("mouseup", function () {
    if (Date.now() - mouseDownTimestamp >= 1500) {
        launchConfetti()
        hours = Number(localStorage.getItem("hours"))
        localStorage.setItem("hours",hours + 1)
        hours = Number(localStorage.getItem("hours"))
        document.getElementById("numberItself").innerText = hours
    }
})

bignumberdiv.addEventListener("touchend", function () {
    if (Date.now() - mouseDownTimestamp >= 1500) {
        launchConfetti()
        hours = Number(localStorage.getItem("hours"))
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