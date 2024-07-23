import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Career from "./components/Career";
import Freelance from "./components/Freelance";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Profile />
      <Career />
      <Experience />
      <Portfolio />
      <Freelance  />
      <SocialLinks />
    </div>
  );
}

export default App;
