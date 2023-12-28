import React, { useEffect, useState } from "react";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import { Toaster } from "react-hot-toast";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };
    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);
  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
