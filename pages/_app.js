import { useEffect } from "react";
import { initGTM } from "../gtm"; // Import the GTM configuration
import "../styles/style.scss";
import "../styles/react-date-range/styles.css"; // main css file
import "../styles/react-date-range/theme/default.css"; // theme css file
import "../styles/custom.css";

function MyApp({ Component, pageProps }) {
  // Initialize GTM when the app mounts
  useEffect(() => {
    initGTM();
  }, []);

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
