// GSAP
import { gsap } from "gsap";

// Animación de entrada
export const tlFadeIn = gsap.timeline({
  paused: true,
  defaults: {
    ease: "sine.out",
    duration: 0.5,
    opacity: 0
  }
});

tlFadeIn.from('#hero-img', {
  filter: 'brightness(0.8) grayscale(0)',
  scale: 1.1,
  duration: 1,
}).from('#hero-title_first', {
  x: 100,
  ease: 'power3.out'
}).from('#hero-title_second', {
  x: -100,
  ease: 'power3.out'
}, '<').from('#hero-description', {
  y: 20,
}).from('#hero-button', {
  y: 20,
}, '<').from('#hero-since', {

}, '<').from('#header', {
  y: -50,
}, '<').from('#hero-scroll-down,#whatsapp-fab', {

}, '<');