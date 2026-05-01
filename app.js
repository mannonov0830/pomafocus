let reportBtn = document.getElementById("reportBtn")
let reportMenu = document.getElementById("reportMenu")
let closeBtn = document.getElementById("closeBtn")


reportMenu.addEventListener("click", (e) => {
    e.stopPropagation()
})

reportBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    reportMenu.classList.toggle("show")
})

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    reportMenu.classList.remove("show")
})

window.addEventListener("click", () => {
    reportMenu.classList.remove("show")
})

