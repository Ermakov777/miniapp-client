// Заглушка для карты Leaflet
import L from 'leaflet';

const map = L.map('app').setView([44.6, 37.7], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
