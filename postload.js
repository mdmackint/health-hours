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
        let i = 1
        let haptics = []
        while (i <= 50) {
            haptics.push(Number(Math.random().toString().substring(0,4))*100)
            i = i + 1
        }
        console.log(haptics)
        navigator.vibrate(haptics)
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