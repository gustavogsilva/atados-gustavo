import "../styles.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Teste de UI</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
