// Translations
import { setLanguage } from './functions/setLanguage.js';

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Animations
import { tlFadeIn } from './animations/fadeInAnimation.js';

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('opacity-0');

  // Set language
  let currentLanguage = localStorage.getItem('language') || 'es';

  setLanguage(currentLanguage);

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
      setLanguage(currentLanguage);
    });
  }

  // Detector de sección en el scroll
  ['services', 'booking', 'location'].forEach(id => {
    gsap.set(`#${id}-nav`, {
      paused: true,
      color: '#f2ca50',
      borderBottom: '2px solid #f2ca50',
      scrollTrigger: {
        trigger: `#${id}`,
        start: 'top 40%',
        end: 'bottom 40%',
        toggleActions: 'play reverse play reverse',
      }
    });
  });

  // Animación de entrada
  tlFadeIn.play();
});