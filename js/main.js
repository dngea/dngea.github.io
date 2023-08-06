function openNav() {
    document.getElementById("overlay_nav").style.height = "100vh";
    document.getElementById("overlay_nav").style.visibility = "visible";
  }
  
  function closeNav() {
    document.getElementById("overlay_nav").style.height = "0vh";
    document.getElementById("overlay_nav").style.visibility = "hidden";
  }




  gsap.utils.toArray(".slideText").forEach(text => {
    gsap.timeline({
      defaults: {ease: "none"},
      scrollTrigger: {
        scroller: text.closest(".horizSlider"),
        horizontal: true,
        trigger: text.closest(".slide"),
        start: "left right",
        end: "left left",
        scrub: true
      }
    })
    .fromTo(text, {x: 250}, {x: -250}, 0)
    .from(text.nextElementSibling, {scale: 0.8}, 0)
  });
