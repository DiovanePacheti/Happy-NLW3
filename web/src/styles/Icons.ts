import Leaflet from 'leaflet';
import mapMarkerImg from '../assets/img/map-marker.svg';

export { FiArrowLeft, FiArrowRight, FiPlus } from 'react-icons/fi';
export const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor: [178, 2]
});