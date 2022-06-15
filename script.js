
let closeModal = document.getElementById("close-modal")
let openModal = document.getElementById("open-modal")
let overLay = document.getElementById("overlay")

openModal.addEventListener("click", function () {
    overLay.style.display = "block";
})

closeModal.addEventListener("click", function () {
    overLay.style.display = "none";
})