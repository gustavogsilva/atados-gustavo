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
      </Head>
      <GlobalStateProvider initialState={initialState}>
        <Component {...pageProps} />
      </GlobalStateProvider>
    </React.Fragment>
  );
};

export default App;
