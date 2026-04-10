// Leaflet
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Translations
import { translations } from './translations.js';

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let currentLanguage = localStorage.getItem('language') || 'es';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let translation = translations[lang];
    keys.forEach(k => {
      translation = translation ? translation[k] : null;
    });

    if (translation) {
      el.innerHTML = translation;
    }
  });

  const langTextEl = document.getElementById('lang-text');
  if (langTextEl) {
    langTextEl.textContent = lang.toUpperCase();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLanguage);

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const newLang = currentLanguage === 'es' ? 'en' : 'es';
      setLanguage(newLang);
    });
  }

  const barberLocation = [6.1606, -75.6054];

  // Inicializar el mapa
  const map = L.map('map', {
    scrollWheelZoom: false, // Desactivar scroll sobre el mapa por accidente
    zoomControl: true
  }).setView(barberLocation, 15);

  // Añadir capa de azulejos oscuros (CartoDB Dark Matter)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  // Marcador personalizado
  const marker = L.marker(barberLocation).addTo(map);

  // Pop-up con estilo de la barbería
  marker.bindPopup(`
        <div style="color: #131313; font-family: 'Manrope', sans-serif; text-align: center;">
            <strong style="display: block; font-size: 1.1em; color: #f2ca50; margin-bottom: 4px;">Classic & Cut</strong>
            <span>C.C. Mayorca</span>
        </div>
    `).openPopup();

  // Animaciones de la barra de navegación
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
  const tlFadeId = gsap.timeline({
    defaults: {
      ease: "sine.out",
      duration: 0.5,
      opacity: 0
    }
  });

  tlFadeId.from('#hero-img', {
    filter: 'brightness(0.5) grayscale(0)',
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

  }, '<')
});