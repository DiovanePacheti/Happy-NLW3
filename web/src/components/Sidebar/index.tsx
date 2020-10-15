import React from 'react';
import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../../assets/img/map-marker.svg';

import { AppSidebar , Footer , IconFiArrowLeft } from './styles';

const Sidebar:React.FC = () => {
    const { goBack } = useHistory();//use
    return(
        <>
            <AppSidebar>
                    <img src={mapMarkerImg} alt="Happy" />

                <Footer>
                    <button type="button" onClick={goBack}>
                        <IconFiArrowLeft size={24} color="#FFF" />
                    </button>
                </Footer>
            </AppSidebar>
        </>
    )
}
export default Sidebar;