import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker,Popup  } from 'react-leaflet';
import mapMarkerImg from '../../assets/img/map-marker.svg';
import {PageMap , Footer , Mapa, IconFiPlus, IconFiArrowRight , Ancora, AncoraPopup} from './styles';
import { mapIcon } from '../../styles/Icons';
import api from '../../services/api';

interface OrphanagenInterface{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

const OrphanagesMap:React.FC = () =>{

    const [orphanagesData , setOrphanagesData] = useState<OrphanagenInterface[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            // console.log(response) observando o retorno desta request
            setOrphanagesData(response.data);
        })
    }, []);
    return(
        <>
            <PageMap>
                <aside>
                    <header>
                        <img src={mapMarkerImg} alt=""/>
                        <h2>Escolha um orfanato no map</h2>
                        <p>Muits crianças estão esperando a sua visita :)</p>
                    </header>
                    <Footer>
                        <strong>Pelotas</strong>
                        <span>Rio Grande do Sul</span>
                    </Footer>
                </aside>
                <Mapa>
                    <Map 
                        center={[-31.7300645,-52.3401932]}
                        zoom={15}
                        style={{width:'100%', height:'100%'}}
                    >
                        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> */}
                        
                        {
                            orphanagesData.map((orphanageItem: OrphanagenInterface) =>{
                                return(
                                    <Marker 
                                        position={[orphanageItem.latitude, orphanageItem.longitude]}
                                        icon={mapIcon}
                                        // position={[-31.7232386, -52.3294214]}
                                        key={orphanageItem.id}
                                    >   
                                        {console.log(orphanageItem.latitude)}
                                        {console.log(orphanageItem.longitude)}

                                            <Popup closeButton={false} minWidth={240} maxWidth={240} >
                                                {orphanageItem.name}
                                                <AncoraPopup>
                                                    <Link to={`/orphanages/${orphanageItem.id}`}><IconFiArrowRight /></Link>    
                                                </AncoraPopup>
                                            </Popup>
                                    </Marker>
                                )
                            })
                        }
                    </Map>    
                </Mapa>
                <Ancora>
                    <Link to="/orphanages/create"><IconFiPlus /></Link>
                </Ancora>
            </PageMap>
        </>
    )
}
export default OrphanagesMap;