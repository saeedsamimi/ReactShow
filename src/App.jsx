import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Saeed Samimi",
  title: "Web Designer & Front-End Developer",
  email: "doob.fooy@gmail.com",
  gitHub: "saeedsamimi",
  instagram: "",
  telegram: "saeedsamimi83",
  linkedIn: "saeed-samimi-9458011b6",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#87CEEB";
const secondaryColor = "#FFFFFF";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
