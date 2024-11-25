// init confetti const - jsconfetti is loaded in the html
const confetti = new JSConfetti()
const launchConfetti = function (count = 400) {
    confetti.addConfetti({
        confettiNumber: count
    })
}
function reloadLastUpdate() {
    let lastUpdate = Number(localStorage.getItem("lastUpdate"))
    if (lastUpdate == "-1") {
        qs("#lastUpdate").innerText = "never"
    } else {
        let diff = Date.now() - lastUpdate
        // change difference into minutes, ready to update the span with, and also remove decimal places by rounding down
        diff = diff / 60000
        diff = Math.floor(diff)
        if (diff > 0) {
            if (diff == 1) {
                qs("#lastUpdate").innerText = diff + " minute ago"
            } else if (diff >= 60) {
                qs("#lastUpdate").innerText = Math.floor(diff / 60) + "h and " + diff % 60 + "m ago"
            } else {
                qs("#lastUpdate").innerText = diff + " minutes ago"
            }
        } else {
            qs("#lastUpdate").innerText = "just now"
        }
    }
}
reloadLastUpdate()
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
        localStorage.setItem("lastUpdate",Date.now())
        reloadLastUpdate()
    }
})
bignumberdiv.addEventListener("touchend", function () {
    if (Date.now() - mouseDownTimestamp >= 1500) {
        launchConfetti()
        hours = Number(localStorage.getItem("hours"))
        localStorage.setItem("hours",hours + 1)
        hours = Number(localStorage.getItem("hours"))
        document.getElementById("numberItself").innerText = hours
        localStorage.setItem("lastUpdate",Date.now())
        reloadLastUpdate()
        let i = 1
        let haptics = []
        while (i <= 20) {
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
