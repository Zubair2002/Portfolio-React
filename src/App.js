import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Header";
import ParticlesAnimation from "./Components/ParticlesAnimation";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Project />
      <Skills />
      <ParticlesAnimation />
    </div>
  );
}

export default App;
