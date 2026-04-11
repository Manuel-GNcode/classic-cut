// Importar Leaflet
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordenadas de la barbería
const barberLocation = [6.1606, -75.6054];

// Inicializar el mapa
const map = L.map('map', {
  scrollWheelZoom: false, // Desactivar scroll sobre el mapa por accidente
  zoomControl: true
}).setView(barberLocation, 15);

// Añadir estilo del mapa
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