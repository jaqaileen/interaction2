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

    // Corrected initial animation state
    tl.set(".left", { rotationY: 0 });
    tl.set(".right", { rotationY: 0 });

    // Animation
    tl.to(".left", {
        rotationY: "-116px", 
        transformOrigin: "left",
        ease: "circ.inOut", // Corrected easing function
        yoyo: true,
    }, 0);
    
    tl.to(".right", {
        rotationY: "116px", 
        transformOrigin: "right",
        ease: "circ.inOut", // Corrected easing function
        yoyo: true,
    }, 0);

    // Animation for showing the text
    tl.to(".text-container", {
        top: "-100vh",
        duration: 1,
        ease: "power2.out",
    });
});
