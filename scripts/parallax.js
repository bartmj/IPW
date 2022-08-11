const tl = gsap.timeline()

tl.fromTo(".after-img", { xPercent: 100, x: 0 }, { xPercent: 0 })
    .fromTo(".after-img img", { xPercent: -100, x: 0 }, { xPercent: 0 }, 0)
tl.pause();
var first_click = true;

document.getElementById("outer-section").addEventListener("touchstart", event => {
    event.preventDefault();
    tl.play();
})

document.getElementById("outer-section").addEventListener("touchend", event => {
    event.preventDefault();

    tl.reverse()
})