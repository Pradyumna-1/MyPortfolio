import React, { useEffect, useState, Suspense } from "react";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const LazyHome = React.lazy(() => import("./components/Home"));
const LazyAbout = React.lazy(() => import("./components/About"));
const LazySkills = React.lazy(() => import("./components/Skills"));
const LazyWork = React.lazy(() => import("./components/Work"));
const LazyContact = React.lazy(() => import("./components/Contact"));
const LazyFooter = React.lazy(() => import("./components/Footer"));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };
    window.addEventListener("resize", resizeRatio);

    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Suspense fallback={<Loader />}>
            <Home />
            <About />
            <Work />
            <Skills />
            <Contact />
            <Footer />
          </Suspense>
          <Toaster />
        </>
      )}
    </>
  );
}

export default App;
