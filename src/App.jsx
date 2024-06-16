import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Threatsmap from "./components/Threatsmap";
import Benefits from "./components/Benefits";
import Ransomware from "./components/Ransomware";
import Pricing from "./components/Pricing";
import Collab from "./components/Collab";

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Threatsmap />
              <Benefits />
              <Collab />
              <Pricing />
            </>
          }
        />
        <Route path="/ransomware" element={<Ransomware />} />
      </Routes>

      <ButtonGradient />
    </div>
  );
};

export default App;
