import Navbar from "./components/ui/Navbar";
import Hero from "./components/pages/Hero";
import "./index.css";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import Footer from "./components/pages/Footer";
import Works from "./components/pages/Works";

function App() {
  return (
    <>
      {/* <DarkToggleMode /> */}
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
