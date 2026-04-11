import { translations } from '../constants/translations.js';

export function setLanguage(lang) {
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