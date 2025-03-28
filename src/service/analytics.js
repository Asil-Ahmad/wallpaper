import ReactGA from "react-ga4";

const GA_TRACKING_ID = "G-0X4ESMYC7R"; // Replace with your Google Analytics ID

export const initGA = () => {
  ReactGA.initialize(GA_TRACKING_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
