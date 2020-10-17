import styled from 'styled-components';
import BackgroundLanding from '../../assets/img/landing.svg';
import { FiArrowRight } from '../../styles/Icons';

export const PageLanding = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh;
    background:var(--color-background-degrade);


`;
export const ContentWapper = styled.div`
    position:relative;
    width:100%;
    max-width:1100px;
    height:100%;
    max-height:580px;
    /* max-height:680px; medida do tutorial */
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-between;
    background:url(${BackgroundLanding}) no-repeat 80% center;
    background-size: 453px;
    
    @media(max-width:375px){
        background-size:253px;
        width:90%;
        justify-content:start;
        >img{
            width:50%;
            
        }
    }
    
`;

export const Main = styled.div`
    max-width: 350px;

    >h1{
        font-size:76px;
        font-weight:900;
        line-height:70px;
    }

    p{
        margin-top:48px;
        font-size:24px;
        line-height:34px;
    }

    @media(max-width:375px){
        >h1{
            margin-top:98px;
            font-size:56px;
            font-weight:900;
            line-height:50px;
        }
        p{
        font-size:24px;
        line-height:34px;
    }
    }
`;

export const Location = styled.div`
    position:absolute;
    right:0;
    top:0;

    font-size:24px;
    line-height:34px;

    display:flex;
    flex-direction:column;

    text-align:right;

    >strong{
        font-weight:800;
    }

    @media(max-width:375px){
        font-size:16px;
        line-height:24px;
    }

`;


export const EnterApp = styled.div`
    position:absolute;
    right:0;
    bottom:0;

    width:88px;
    height:88px;
    background:var(--color-yellow);
    border-radius:30px;

    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    transition: background-color 0.2s;
    
    &:hover{
        background:var(--color-light-blue);
    }

    @media(max-width:375px){
        width:100%;
    }
`;

export const IconFiArrowRight = styled(FiArrowRight)`
    /* font-size:26px; */
    width:32px;
    height:32px;
    color:var(--color-opacity-dark);
    
`;