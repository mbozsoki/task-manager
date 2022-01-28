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

        --secondary-color: #464255;
        --secondary-bg-color: #ecebf3;
        --secondary-bg-hover-color: #DBD9E8;
        --secondary-bg-active-color: #C3BFD9;

        --disabled-color: #d0cfd5;
        --disabled-bg-color: #ecebf3;
        --placeholder-color: #d7d9dc;
        --border-color: #e8e8f0;
        --highlight-bg-color: #e9dbf3;

        --info-color: #57ccf3;
        --info-bg-color: #e4f6fb;

        --success-color: #17df37;
        --success-bg-color: #dffbea;

        --low-priorty-color: #02a389;
        --low-priorty-bg-color: #d3ebe8;
        --medium-piority-color: #ffbb53;
        --medium-piority-bg-color: #fcf2e3;
        --high-priority-color: #ff5a5a;
        --high-priority-bg-color: #fde5e5;
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
