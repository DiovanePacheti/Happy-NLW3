import styled from 'styled-components';

export const PageCreateOrphanage = styled.div`
    display: flex;
    width:100vw;

    @media(max-width:375px){
      display: flex;
      width:100vw;
    }
`;

export const Main = styled.div`
    display: flex;
    flex: 1;
    @media(max-width:375px){
        width:100%;
        flex:1;
        display:flex;
    }
`;

export const CreateOrphanageForm = styled.form`
    width: 700px;
    margin: 64px auto;

    background: #FFFFFF;
    border: 1px solid #D3E2E5;
    border-radius: 20px;

    padding: 64px 80px;

    overflow: hidden;

    @media(max-width:375px){
        width:95%;
        padding: 5px;
        margin: 10px auto 10px;
        border:0;
        overflow: hidden;
    }

    >button.confirm-button {
        margin-top: 64px;

        width: 100%;
        height: 64px;
        border: 0;
        cursor: pointer;
        background: #3CDC8C;
        border-radius: 20px;
        color: #FFFFFF;
        font-weight: 800;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom:12px;

        transition: background-color 0.2s;
    }
    >button.confirm-button svg {
        margin-right: 16px;
    }
    >button.confirm-button:hover {
        background: #36CF82;
    }
`;

export const Fieldset = styled.div`
    border: 0;

    >legend {
        width: 100%;
        font-size: 32px;
        line-height: 34px;
        color: #5C8599;
        font-weight: 700;
        border-bottom: 1px solid #D3E2E5;
        margin-bottom: 40px;
        padding-bottom: 24px;

        @media(max-width:375px){
          margin-top:30px;
        }
    }

    & + fieldset {
        margin-top: 80px;
    }

    >.input-block + .input-block {
        margin-top: 24px;
    }

    >.input-block label {
        display: flex;
        color: #8FA7B3;
        margin-bottom: 8px;
        line-height: 24px;
    }
    >.input-block label span {
        font-size: 14px;
        color: #8FA7B3;
        margin-left: 24px;
        line-height: 24px;
    }

    >.input-block input,
    .input-block textarea {
        width: 100%;
        background: #F5F8FA;
        border: 1px solid #D3E2E5;
        border-radius: 20px;
        outline: none;
        color: #5C8599;
    }

    >.input-block input {
        height: 64px;
        padding: 0 16px;
    }

    >.input-block textarea {
  min-height: 120px;
  max-height: 240px;
  resize: vertical;
  padding: 16px;
  line-height: 28px;
}
>.input-block .images-container{
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;
}
>.input-block .images-container img{
  width:100%;
  height:96px;
  object-fit: cover;
  border-radius:20px;
}
>.input-block .new-image {
  height: 96px;
  background: #F5F8FA;
  border: 1px dashed #96D2F0;
  border-radius: 20px;
  cursor: pointer;

  display:flex;
  justify-content: center;
  align-items:center;
}
>.input-block input[type=file]{
  display:none;
}
>.input-block .button-select {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
>.input-block .button-select button {
  height: 64px;
  background: #F5F8FA;
  border: 1px solid #D3E2E5;
  color: #5C8599;
  cursor: pointer;
}
>.input-block .button-select button.active {
  background: #EDFFF6;
  border: 1px solid #A1E9C5;
  color: #37C77F;
}
>.input-block .button-select button:first-child {
  border-radius: 20px 0px 0px 20px;
}
>.input-block .button-select button:last-child {
  border-radius: 0 20px 20px 0;
  border-left: 0;
}



`;