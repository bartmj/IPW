var first_click = true;
const iframeA = document.getElementById('iframe-a')
mapBtn.onclick = function () {
    if (first_click) {
        showMap(iframeA)
        first_click = false;
    } else {
        hideMap(iframeA)
        first_click = true;
    }
}

var first_click3 = true;
const iframeB = document.getElementById('iframe-b')
mapBtn2.onclick = function () {
    if (first_click3) {
        showMap(iframeB)
        first_click3 = false;
    } else {
        hideMap(iframeB)
        first_click3 = true;
    }
}

function hideMap(frame) {
    frame.style.opacity = "0"
    frame.style.top = "1"
    frame.style.height = "0px"
    frame.style.marginBottom = "0em"
    frame.style.zIndex = "-1"

}

function showMap(frame) {
    frame.style.opacity = "1"
    frame.style.top = "0"
    frame.style.height = "320px"
    frame.style.marginBottom = "1em"
    frame.style.zIndex = "10"
}

const mobileImg1 = document.getElementById("m-img-1")
const mobileImg2 = document.getElementById("m-img-2")

document.getElementById("next").addEventListener("click", () => {
    mobileImg1.src = "img/Plac_Unii/[ACC] PL UNII WIDOK NA POŁUDNIE HIGH RES.jpg"
    mobileImg2.src = "img/Plac_Unii/[ACC] PL UNII WIDOK NA POŁUDNIE HIGH RES BW.jpg"
})

document.getElementById("prev").addEventListener("click", () => {
    mobileImg1.src = "img/Plac_Unii/PL UNII KOLOR.jpg"
    mobileImg2.src = "img/Plac_Unii/[ACC] PL UNII HIGH RES NATURAL BW.jpg"
})