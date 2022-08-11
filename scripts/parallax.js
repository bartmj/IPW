const tl = gsap.timeline()

tl.fromTo(".after-img", { xPercent: 100, x: 0 }, { xPercent: 0 })
    .fromTo(".after-img img", { xPercent: -100, x: 0 }, { xPercent: 0 }, 0)
tl.pause();

var first_click = true;

document.getElementById("test").addEventListener("touchstart", event => {
    event.preventDefault();
    tl.play();
})

document.getElementById("test").addEventListener("touchmove", event => {
    event.preventDefault();

    tl.reverse()
})