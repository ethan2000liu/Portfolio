import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Career from "./components/Career";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Career />
      <Experience />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;
