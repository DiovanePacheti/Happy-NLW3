import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        color:#fff;
        background:#ebf2f5;
    }

    body,
    input,
    button,
    textarea{
        font:600 18px Nunito, sans-serif;
    }

    :root{
        --color-background-degrade:linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
        --color-white:#fff;
        --color-yellow:#ffd666;
        --color-blue-baby:#15c3d6;
        --color-blue-baby-light:#17d6eb;
        --color-light-blue:#96FEFF;
        --color-opacity-dark:rgba(0,0,0,0.6);
    }

`;