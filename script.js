var btn = document.getElementById("btn")
var adblock = document.getElementById("adblock")
btn.addEventListener("click", function () {
    adblock.remove()
})
function toggleMenu() {
        document.getElementById("sidebar").classList.toggle("active");
    }