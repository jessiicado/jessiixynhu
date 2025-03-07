import Navbar from "./components/Navbar";
import ToggleMode from "./components/ToggleMode";
import Hero from "./components/Hero";
import About from "./components/About";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Navbar />
      <Background />
      <ToggleMode />
      <Hero />
      <About />
    </>
  );
}

export default App;
