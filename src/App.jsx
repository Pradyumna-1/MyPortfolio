import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Services from "./components/Services";
import Timeline from "./components/Timeline";


import Footer from "./components/Footer";
import About from "./components/About";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About/>
      <Timeline /> 
      <Work />
      {/* <Services /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
