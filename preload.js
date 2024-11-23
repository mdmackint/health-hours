if (localStorage.getItem("hours") == null) {
    localStorage.setItem("hours",0)
}
function qs(query) {
    return document.querySelector(query)
}
function toggleMenu() {
    if (qs("#bignumber").classList.contains("menued")) {
        // code to run if the menu is being closed
        qs("#bignumber").classList.remove("menued")
        qs("#menuFlyout").classList.remove("opaque")
        setTimeout(function () {qs("#menuFlyout").classList.remove("flown")}, 500)
    } else {
        // code to run if it is being opened
        qs("#bignumber").classList.add("menued")
        qs("#menuFlyout").classList.add("flown")
        setTimeout(function () {
            qs("#menuFlyout").classList.add("opaque") 
        }, 500)
    }
}
function pmod(mod) {
    let current = localStorage.getItem("hours")
    current = Number(current)
    if (current + mod < 0) {
        qs("#body").classList.add("red")
        setTimeout(function () {
            qs("#body").classList.remove("red")
        }, 500)
    } else {
        localStorage.setItem("hours", current + mod)
        let hours = Number(localStorage.getItem("hours"))
        document.getElementById("numberItself").innerText = hours
        launchConfetti()
        setTimeout(toggleMenu(), 1000)
    }
}