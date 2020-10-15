import styled from 'styled-components';
import { FiArrowLeft } from '../../styles/Icons';

export const AppSidebar = styled.aside`
    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    >img{
        width: 48px;
    }
`;

export const Footer =styled.footer`

    >a , button{
        width: 48px;
        height: 48px;
    
        border: 0;
    
        background: #12AFCB;
        border-radius: 16px;
    
        cursor: pointer;
    
        transition: background-color 0.2s;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    >a:hover, button:hover{
        background: #17D6EB;
    }
`;

/*

#page-create-orphanage aside {
    
  }
  
  #page-create-orphanage aside img {
  }
  
  #page-create-orphanage aside footer a,
  #page-create-orphanage aside footer button {
    
  }
  
  #page-create-orphanage aside footer a:hover,
  #page-create-orphanage aside footer button:hover {
    background: #17D6EB;
  }
*/  













export const IconFiArrowLeft = styled(FiArrowLeft)`
`;