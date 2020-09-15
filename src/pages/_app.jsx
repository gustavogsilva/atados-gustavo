import '../../css/styles.css';
import Head from 'next/head';
import { GlobalStateProvider } from '../contexts/GlobalState';

const initialState = {
  data: '',
  destino: '',
  origem: '',
  pessoas: '1',
  tipoPassagem: ''
};

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Atados - Gustavo</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStateProvider initialState={initialState}>
        <Component {...pageProps} />
      </GlobalStateProvider>
    </React.Fragment>
  );
};

export default App;
