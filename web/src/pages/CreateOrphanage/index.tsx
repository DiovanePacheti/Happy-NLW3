import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import {LeafletMouseEvent}from 'leaflet' //importando o LeafletMouseEvent como interface do event no click do mouse do mapa
import { FiPlus } from "react-icons/fi";
import './styles.css';
import Sidebar from "../../components/Sidebar";
import { mapIcon } from "../../styles/Icons";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

interface InterfaceInputOrphanages{
  name:string;
  about:string;
  instructions:string;
  opening_hours:string;
  latitude:number;
  longitude:number;
  open_on_weekends:boolean;
  image:[];

}

export default function CreateOrphanage() {

  const history = useHistory();

  //estado que armazena a posição lat e log clicada no mapa e inicia com um objeto com as posiçoes om valores zerados
  const [ position , setPosition] = useState({latitude:0, longitude:0})
  const [ open_on_weekends , setOpenOnWeekends] = useState(false);

  const[images, setImages] = useState<File[]>([]);
  const [previewImages , setPreviewImages ] = useState<string[]>([]);

  const [orphanagesCreateForm, setOrphanagesCreateForm] = useState<InterfaceInputOrphanages>({} as InterfaceInputOrphanages);

  function handleMapClick(e: LeafletMouseEvent){
     console.log(e.latlng)
    const { 
      lat,
      lng 
    } = e.latlng;//desestruturando os latlng

    setPosition({
      latitude:lat,
      longitude:lng
    })
  }

  function handleSeletImages(e: ChangeEvent<HTMLInputElement>){
    // console.log(e.target.files)

    if(!e.target.files){
      return;
    }
    const selectedImages = Array.from(e.target.files)
    setImages(selectedImages)

    const selectedImagesPreview = selectedImages.map(image =>{
      return URL.createObjectURL(image);
    });
    setPreviewImages(selectedImagesPreview);
  }

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setOrphanagesCreateForm({
      ...orphanagesCreateForm,
      [e.currentTarget.name]: e.currentTarget.value
    });
    // console.log(orphanagesCreateForm);
  },[orphanagesCreateForm]);

  const handleChangeTextArea = useCallback(( e: React.FormEvent<HTMLTextAreaElement>) => {
    setOrphanagesCreateForm({
      ...orphanagesCreateForm,
      [e.currentTarget.name]: e.currentTarget.value
    });
    // console.log(orphanagesCreateForm);
  },[orphanagesCreateForm]);

  async function handleSubmit(e:FormEvent){
    e.preventDefault();
    
    setOrphanagesCreateForm({
      ...orphanagesCreateForm,
       latitude:position.latitude,
       longitude:position.longitude, 
       open_on_weekends
    })
    console.log(orphanagesCreateForm)
    
    const data = new FormData()

    data.append('name', orphanagesCreateForm.name);
    data.append('about', orphanagesCreateForm.about);
    data.append('latitude', String(orphanagesCreateForm.latitude));
    data.append('longitude', String(orphanagesCreateForm.longitude));
    data.append('instructions', orphanagesCreateForm.instructions)
    data.append('opening_hours', orphanagesCreateForm.opening_hours)
    data.append('open_on_weekends', String(orphanagesCreateForm.open_on_weekends))
    data.append('name', orphanagesCreateForm.name)
    
    images.forEach(image =>{
      data.append('images', image);
    })
    
    
    await api.post('orphanages', data)
    
    alert('Cadastro realizado com sucesso !');

    // history.push('/app')
    
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-31.7232386,-52.3294214]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              {/* <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              /> */}
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {
                position.latitude !== 0 
                &&<Marker 
                    interactive={false}   
                    icon={mapIcon} 
                    position={[position.latitude,position.longitude]} 
                  />
              }
            </Map>

            <div className="input-block">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" onChange={handleChange}/>
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" name="about" maxLength={300} onChange={handleChangeTextArea} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {
                  previewImages.map(image => {
                    return(
                      <img key={image} src={image} />
                    )
                  })
                }
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input multiple onChange={handleSeletImages} type="file" id="image[]" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" name="Instruções" maxLength={300} onChange={handleChangeTextArea} />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input id="opening_hours" name="opening_hours" onChange={handleChange} />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button 
                    type="button" 
                    className={open_on_weekends ? 'active' : ''}
                    onClick={() => setOpenOnWeekends(true)}
                >Sim</button>
                <button 
                    type="button"
                    className={!open_on_weekends ? 'active' : ''}
                    onClick={() => setOpenOnWeekends(false)}
                >Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
