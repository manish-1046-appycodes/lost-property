import ReactGA from "react-gtm-module";

export const initGTM = () => {
  const tagManagerArgs = {
    gtmId: "GTM-55SZNVR6", // Replace with your GTM container ID
  };

  ReactGA.initialize(tagManagerArgs);
};
