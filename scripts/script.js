const opacityButton = document.getElementById('opacity-button')
const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')

const slidesPair1 = document.getElementsByClassName('slides1')
const slidesPair2 = document.getElementsByClassName('slides2')
const slidesPair3 = document.getElementsByClassName('slides3')
const slidesPair4 = document.getElementsByClassName('slides4')
const slidesPair5 = document.getElementsByClassName('slides5')
const slidesPair6 = document.getElementsByClassName('slides6')
const slidesPair7 = document.getElementsByClassName('slides7')
const slidesPair8 = document.getElementsByClassName('slides8')
const slidesPair9 = document.getElementsByClassName('slides9')
const slidesPair10 = document.getElementsByClassName('slides10')

const allSlidesPairs = [slidesPair1, slidesPair2, slidesPair3,
    slidesPair4, slidesPair5, slidesPair6, slidesPair7, slidesPair8, slidesPair9, slidesPair10]
// Mobile map buttons
const mapBtn = document.getElementById('map-btn-1')
const mapBtn2 = document.getElementById('map-btn-2')
// Mobile map buttons
// Resize event
/** */
let windowHeight = window.innerHeight
/** */
window.addEventListener('resize', (event) => {
    windowHeight = window.innerHeight
    if (window.innerWidth < 905) {
        document.getElementById('animated').style.display = 'none';
    }
});
// Resize event
/** */

const waypoints = [true, false, false, false, false, false, false, false, true, false]
const slideIndexes = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const photoNr = document.getElementById('photo-count')
/** */
/** Horizontal gallery - beginning */
function plusSlides(n) {
    for (let i = 0; i < waypoints.length; i++) {
        waypoints[i] == true ? showSlides(slideIndexes[i] += n, i) : null
    }
}

function showSlides(n, i) {
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndexes[i] = slides.length }
    if (n < 1) { slideIndexes[i] = 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndexes[i] - 1].style.display = "block";

}
/** Horizontal gallery - end */

/** Opacity button - beginning */
opacityButton.onclick = () => {
    toggleOpacity()
}

toggleOpacity = () => {
    let activeSlides = document.getElementsByClassName('mySlides');

    for (let i = 0; i < waypoints.length; i++) {
        if (waypoints[i] == true) {
            slideIndexes[i] == 1 ? toggleFade(0) : toggleFade(1)
        }
    }

    function toggleFade(n) {
        let currentSlide = activeSlides[n].firstElementChild
        currentSlide.classList.toggle('fade')
    }
}
/** Opacity button - end */

/** Waypoints - beginning */
window.addEventListener('scroll', () => {
    let topOffset = window.pageYOffset
    windowHeight = window.innerHeight
    if (topOffset < (windowHeight / 2)) {
        wayPoint(0)
        showButtons()
    } else if ((topOffset > (windowHeight / 2)) && (topOffset < (windowHeight * 1.5))) {
        wayPoint(1)
        showButtons()
    } else if (topOffset > (windowHeight * 1.5) && (topOffset < (windowHeight * 2.5))) {
        wayPoint(2)
        disappearButtons()
    } else if (topOffset > (windowHeight * 2.5) && (topOffset < (windowHeight * 3.5))) {
        wayPoint(3)
        disappearButtons()
    } else if (topOffset > (windowHeight * 3.5) && (topOffset < (windowHeight * 4.5))) {
        wayPoint(4)
        disappearButtons()
    } else if (topOffset > (windowHeight * 4.5) && (topOffset < (windowHeight * 5.5))) {
        wayPoint(5)
        disappearButtons()
    } else if (topOffset > (windowHeight * 5.5) && (topOffset < (windowHeight * 6.5))) {
        wayPoint(6)
        showButtons()
    } else if (topOffset > (windowHeight * 6.5) && (topOffset < (windowHeight * 7.5))) {
        wayPoint(7)
        disappearButtons()
    } else if (topOffset > (windowHeight * 7.5) && (topOffset < (windowHeight * 8.5))) {
        wayPoint(8)
        disappearButtons()
    } else if (topOffset > (windowHeight * 8.5) && (topOffset < (windowHeight * 9.5))) {
        wayPoint(9)
        showButtons()
    }
})
/** */
function disappearButtons() {
    prevButton.style.opacity = '0'
    nextButton.style.opacity = '0'
}

function showButtons() {
    prevButton.style.opacity = '0.7'
    nextButton.style.opacity = '0.7'
}
/** */
function wayPoint(n) {
    if (waypoints[n] === false) {
        // console.log("waypoint");
        deactivateAllSlidePairs()
        activateSlidePair(n)
        activateSideMenuLi(n)

    }
    setWaypoint(n)
}
/** */
function setWaypoint(n) {
    for (let i = 0; i < waypoints.length; i++) {
        waypoints[i] = false
    }
    waypoints[n] = true
}
/** */
/** Waypoints - end */

/** */
const li1 = document.getElementById('nav-li-1')
const li2 = document.getElementById('nav-li-2')
const li3 = document.getElementById('nav-li-3')
const li4 = document.getElementById('nav-li-4')
const li5 = document.getElementById('nav-li-5')
const li6 = document.getElementById('nav-li-6')
const li7 = document.getElementById('nav-li-7')
const li8 = document.getElementById('nav-li-8')
const li9 = document.getElementById('nav-li-9')
const li10 = document.getElementById('nav-li-10')
const allLiItems = [li1, li2, li3, li4, li5, li6, li7, li8, li9, li10]

function activateSideMenuLi(n) {
    for (let i = 0; i < allLiItems.length; i++) {
        allLiItems[i].classList.remove('active')
    }
    document.getElementById('nav-li-' + (n + 1)).classList.add('active')
}

/** */
function activateSlidePair(n) {
    let slidesPair

    for (let i = 0; i < allSlidesPairs.length; i++) {
        n == i ? slidesPair = allSlidesPairs[i] : null
    }

    for (let i = 0; i < slidesPair.length; i++) {
        slidesPair[i].classList.add('mySlides')
    }
}

/** */
function deactivateAllSlidePairs() {
    for (let i = 0; i < allSlidesPairs.length; i++) {
        for (let j = 0; j < allSlidesPairs[i].length; j++) {
            allSlidesPairs[i][j].classList.remove('mySlides')
        }
    }
}
/** */

/** Navigation - scroll to - beginning */

li1.onclick = () => { scrollTo(0) }
li2.onclick = () => { scrollTo(windowHeight) }
li3.onclick = () => { scrollTo(windowHeight * 2) }
li4.onclick = () => { scrollTo(windowHeight * 3) }
li5.onclick = () => { scrollTo(windowHeight * 4) }
li6.onclick = () => { scrollTo(windowHeight * 5) }
li7.onclick = () => { scrollTo(windowHeight * 6) }
li8.onclick = () => { scrollTo(windowHeight * 7) }
li9.onclick = () => { scrollTo(windowHeight * 8) }
li10.onclick = () => { scrollTo(windowHeight * 9) }

function scrollTo(n) {
    window.scroll({ top: n, behavior: "smooth" })
}
/** Navigation - scroll to - end */

/** Keyboard events - beginning */
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { plusSlides(-1) }
    if (e.key === 'ArrowRight') { plusSlides(1) }

    e.key === 'a' ? plusSlides(-1) : null
    e.key === 'd' ? plusSlides(1) : null
    e.key === 'c' ? toggleOpacity() : null

    for (let i = 0; i < waypoints.length; i++) {
        if (waypoints[i] == true) {
            e.key === 'w' ? scrollTo(windowHeight * (i - 1)) : null
            e.key === 's' ? scrollTo(windowHeight * (i + 1)) : null
        }
    }
});
/** Keyboard events - end */

/** Animate logo */
let br = document.createElement("br")

function writeSlowly(string) {
    for (let i = 0; i < string.length; i++) {
        setTimeout(() => {
            document.getElementById('animated').append(string[i])
        }, i * 50)
    }
}

function animateText() {
    setTimeout(() => {
        writeSlowly(`Trasa №1 - Mokotów Skarpa`);
    }, 1000)
}
/** Animate logo */

if (window.innerWidth > 760) {
    animateText();
}