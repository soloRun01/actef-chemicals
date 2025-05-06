// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.17
});

gsap.to('.home-img-banner' , {
  scrollTrigger:{
    scrub:true,
    start: '0% 0%',
    end:'100% 40%',
    trigger: '.home',
    pin: '.home'
  },
  width: '100%',
  height: '200%',
  y: '45vh',
  borderRadius: '0'
})

