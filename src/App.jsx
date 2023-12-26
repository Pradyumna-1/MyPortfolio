import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Timeline />
      <Work />
      <Contact />
      <Footer />
      <Toaster />
    
    </>
  );
}

export default App;
