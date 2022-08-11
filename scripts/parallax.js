const tl = gsap.timeline()

tl.fromTo(".after-img", { xPercent: 100, x: 0 }, { xPercent: 0 })
    .fromTo(".after-img img", { xPercent: -100, x: 0 }, { xPercent: 0 }, 0)
tl.pause();
var first_click = true;

var oldXPos = null
var xPos = null
document.getElementById("outer-section").addEventListener("touchmove", event => {
    event.preventDefault();

    oldXPos = xPos
    xPos = event.touches[0].clientX

    if (oldXPos > xPos) {
        tl.play();
    } else {
        tl.reverse()

    }
})

// document.getElementById("outer-section").addEventListener("touchmove", event => {
//     event.preventDefault();
//     oldXPos = xPos
//     xPos = event.touches[0].clientX

//     if (oldXPos > xPos) {
//     }

// })