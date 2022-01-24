import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins-Thin';
        src: url('../assets/Poppins-Thin.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Poppins-Light';
        src: url('/assets/Poppins-Light.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Poppins-Regular';
        src: url('/assets/Poppins-Regular.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Poppins-Medium';
        src: url('/assets/Poppins-Medium.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Poppins-SemiBold';
        src: url('/assets/Poppins-SemiBold.ttf') format('truetype');
    }

    :root {
        --font-family: 'Poppins-Regular';
        --background-color: #fdfdfd;

        --primary-color: #f3f2f7;
        --primary-bg-color: #ab53db;
        --primary-bg-hover-color: #9C35D4;
        --primary-bg-active-color: #8627B9;

        --secondary-color: #434054;
        --secondary-bg-color: #ecebf3;
        --secondary-bg-hover-color: #DBD9E8;
        --secondary-bg-active-color: #C3BFD9;

        --disabled-color: #d0cfd5;
        --disabled-bg-color: #ecebf3;

        --border-color: #e8e8f0;
    }

    body {
        margin: 0;
        background-color: var(--background-color);
        font-family: var(--font-family), -apple-system, BlinkMacSystemFont,
            'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        font-family: inherit;
    }
`

export default GlobalStyle
