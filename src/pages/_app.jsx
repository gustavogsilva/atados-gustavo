import '../../css/styles.css';
import Head from 'next/head';
import { GlobalStateProvider } from '../contexts/GlobalState';

const initialState = {
  data: '',
  destino: '',
  origem: '',
  pessoas: '',
  tipoPassagem: ''
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Atados Airline</title>
        <meta name="Description" content="A melhor companhia de aviação do Brasil!" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStateProvider initialState={initialState}>
        <Component {...pageProps} />
      </GlobalStateProvider>
    </>
  );
};

export default App;
