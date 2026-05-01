let reportBtn = document.getElementById("reportBtn")
let reportMenu = document.getElementById("reportMenu")
let closeBtn = document.getElementById("closeBtn")

let reportBtnn = document.getElementById("reportBtnn")
let reportMenuu = document.getElementById("reportMenuu")

// hamma menu'larni yopish funksiyasi
function closeAllMenus() {
    reportMenu.classList.remove("show")
    reportMenuu.classList.remove("show")
}

// first dropdown
reportBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    closeAllMenus()
    reportMenu.classList.toggle("show")
})

// second dropdown
reportBtnn.addEventListener("click", (e) => {
    e.stopPropagation()
    closeAllMenus()
    reportMenuu.classList.toggle("show")
})

// close button
closeBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    closeAllMenus()
})

// outside click
window.addEventListener("click", () => {
    closeAllMenus()
})