let reportBtn = document.getElementById("reportBtn")
let reportMenu = document.getElementById("reportMenu")

let reportBtnn = document.getElementById("reportBtnn")
let reportMenuu = document.getElementById("reportMenuu")

let dropMenu = document.getElementById("dropMenu")
let dawnMenu = document.getElementById("dawnMenu")

let allMenus = [reportMenu, reportMenuu, dawnMenu]

let closeBtn = document.getElementById("closeBtn")

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    reportMenu.classList.remove("show")
})

function closeAllMenus() {
    allMenus.forEach(menu => menu.classList.remove("show"))
}


reportBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    closeAllMenus()
    reportMenu.classList.toggle("show")
})


reportBtnn.addEventListener("click", (e) => {
    e.stopPropagation()
    closeAllMenus()
    reportMenuu.classList.toggle("show")
})


dropMenu.addEventListener("click", (e) => {
    e.stopPropagation()
    closeAllMenus()
    dawnMenu.classList.toggle("show")
})

document.addEventListener("click", () => {
    closeAllMenus()
})


allMenus.forEach(menu => {
    menu.addEventListener("click", (e) => {
        e.stopPropagation()
    })
})