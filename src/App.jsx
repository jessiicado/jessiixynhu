import Navbar from "./components/ui/Navbar";
import Hero from "./components/pages/Hero";
import "./index.css";
import { DarkToggleMode } from "./components/ui/DarkToggleMode";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <DarkToggleMode />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
