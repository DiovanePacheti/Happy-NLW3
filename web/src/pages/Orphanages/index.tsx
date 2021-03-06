import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";


// import './styles.css';
import { 
  PageOrphanage, 
  Main, 
  OrphanageDetails, 
  Images,
  OrphanageDetailsContent,
  MapContainer,
  OpenDetails
} from './styles';
import Sidebar from "../../components/Sidebar";
import { mapIcon } from "../../styles/Icons";
import {useParams } from "react-router-dom";
import api from "../../services/api";

interface OrphanagenInterface{
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions:string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: string;
    url: string;
  }>;
}

interface OrphanageParams{
  id:string;
}
export default function Orphanage() {

  const params = useParams<OrphanageParams>();

  const [orphanageData , setOrphanageData] = useState<OrphanagenInterface>();

  //estado que vai trocar a imagem que esta ativa na banner e vai começar na posição 0
  const [ activeImageIndex , setActiveImageIndex] = useState<number>(0)

    useEffect(() => {
        api.get(`orphanages/${params.id}`).then(response => {
            // console.log(response) observando o retorno desta request
            setOrphanageData(response.data);
        })
    }, [params.id]);

    if(!orphanageData){
      return <p>Carregando ...</p>
    }

  return (
    <PageOrphanage>
      <Sidebar />

      <Main>
        <OrphanageDetails>
          <img src={orphanageData.images[activeImageIndex].url} alt={orphanageData.name} />

          <Images>
            
            {
              orphanageData.images.map((image, index )=>{
                return(
                  <button 
                    key={image.id} 
                    className={activeImageIndex === index ? 'active':''} 
                    type="button"
                    onClick={() => {
                      setActiveImageIndex(index);
                    }}
                    >
                    <img src={image.url} alt={orphanageData.name} />
                  </button>
                )
              })
            }
            
          </Images>
          
          <OrphanageDetailsContent>
            <h1>{orphanageData.name}</h1>
            <p>{orphanageData.about}</p>

            <MapContainer>
              <Map 
                center={[orphanageData.latitude, orphanageData.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                {/* <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                /> */}
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker interactive={false} icon={mapIcon} position={[orphanageData.latitude, orphanageData.longitude]} />
              </Map>

              <footer>
                <a target="_blanck" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanageData.latitude}, ${orphanageData.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanageData.instructions}</p>

            <OpenDetails>
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanageData.opening_hours}
              </div>
              {
                orphanageData.open_on_weekends ?(
                  <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
                ):(
                  <div className="open-on-weekends">
                <FiInfo size={32} color="#FF669D" />
                Não Atendemos <br />
                fim de semana
                 </div>
                )
              }
            </OpenDetails>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </Main>
    </PageOrphanage>
  );
}