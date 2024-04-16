var tl = gsap.timeline();

tl.from("#left img, #center h1, #right button, #right h1", {
  y: -50,
  duration: 1,
  opacity: 0,
  stagger: 0.3
})

tl.from("#home-page h1", {
  y: 100,
  opacity: 0,
  stagger: 0.3
})

tl.from("#home-page img", {
  scale: 0,
  opacity: 0,
  stagger: 0.2
})

tl.from("#home-page h6", {
  scale: 0,
  opacity: 0
})

tl.to("#home-page h6", {
  y: 30,
  repeat: -1,
  duration: 0.5,
  yoyo: true
})