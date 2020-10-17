import styled from 'styled-components';

import { FiPlus,FiArrowRight } from '../../styles/Icons'

export const PageMap = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
    display:flex;

    >aside{
        width:440px;
        background:var( --color-background-degrade);
        padding:80px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;

        >h2{
            font-size:40px;
            font-weight:800;
            line-height:42px;
        }
        >p{
            line-height:28px;
            margin-top:24px;
        }
        
    }

    @media(max-width:375px){
        aside{
            display:none;
        }
    }

    
`;

export const Footer = styled.footer`
    display:flex;
    flex-direction:column;
    line-height:24px;

    >strong{
        font-weight:800;
    }
`;


export const Mapa = styled.div`
    width:100%;
    height:100%;
    /* >Map{
        >Marker{

            >Popup .map-popup .leaflet-popup-content-wapper{
                background:red;   
            }
        }
    } */
`;


export const MapPopup = styled.div`
     >.leaflet-popup-content-wapper{
                background:red;   
                width:89px;
            }
`;

export const IconFiPlus = styled(FiPlus)`
    width:32px;
    height:32px;
    color:var( --color-white);
`;
export const IconFiArrowRight = styled(FiArrowRight)`
    width:32px;
    height:32px;
    color:var( --color-white);
`;

export const Ancora = styled.div`
    position:absolute;
    right:40px;
    bottom:40px;
    z-index:999;
    width:64px;
    height:64px;
    background:var(--color-blue-baby);
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition:background-color 0.2s;
    &:hover{
        background:var(--color-blue-baby-light);
    }
`;

export const AncoraPopup = styled.div`
    >a{
        width:40px;
        height:40px;
        background:var(--color-blue-baby);
        box-shadow:17.2868px 27.6589px 41.4884px rgba(23,142,166,0.16);
        border-radius:12px;
        display:flex;
        justify-content:center;
        align-items:center;

    }
`;