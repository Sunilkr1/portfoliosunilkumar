
import { useState, useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certificates from "./sections/Certificates";
import Testimonials from "./sections/ClientFeedback";
import Contact from "./sections/Contact";
import Footer from "./assets/components/Footer";
import Skills from "./sections/Skills";
import Preloader from "./assets/components/Preloader";
import Services from "./sections/Services";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preloader timeout
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 🚫 Disable Right-click
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);

    // 🚫 Disable Shortcut Keys
    const disableShortcuts = (e) => {
      if (
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U") ||
        e.key === "F12" ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault();
        alert("This action is disabled on this site.");
      }
    };
    document.addEventListener("keydown", disableShortcuts);

    // 🚫 Disable text selection
    document.body.style.userSelect = "none";

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableShortcuts);
      document.body.style.userSelect = "auto";
    };
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Testimonials />
          <Services />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
