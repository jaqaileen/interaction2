jQuery(document).ready(function() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".door-wrapper",
            pin: true,
            start: "top",
            end: "bottom",
            scrub: 1,
            markers: false,
        }
    });

    tl.to(".left", {
        rotationY: "-116px",
        transformOrigin: "left",
        ease: "circ.in",
        yoyo: true,
    }, 0);

    tl.to(".right", {
        rotationY: "116px",
        transformOrigin: "right",
        ease: "circ.in",
        yoyo: true,
    }, 0);
});
