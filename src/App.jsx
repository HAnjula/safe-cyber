import { Routes, Route, useLocation } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Threatsmap from "./components/Threatsmap";
import Benefits from "./components/Benefits";
import Ransomware from "./components/Ransomware";
import Pricing from "./components/Pricing";
import Collab from "./components/Collab";
import LogIn from "./components/LogIn";
import RegisterForm from "./components/RegistrationForm";
import RealTimeMap from "./components/RealTimeMap";
import AboutUs from "./components/AboutUs";
import Solutions from "./components/Solutions";
import Threats from "./components/Threats";
import Socialeng from "./components/Socialeng";
import WebSimulation from "./components/WebSimulation";
import CyberAttackNews from "./components/News";
import Resources from "./components/Resources";
import Spyware from "./components/spyware";
import BotnetSimulation from "./components/botnets";
import Zeroexploits from "./components/zeroexploits";
import Phishing from "./components/phishing";
import IncidentReportForm from "./components/IncidentReportForm";

const App = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";
  const isRegisterRoute = location.pathname === "/Signup";
  const isLiveThreatsMapRoute = location.pathname === "/LiveThreatsMap";

  return (
    <div
      className={`overflow-hidden ${
        !isLoginRoute && !isRegisterRoute && !isLiveThreatsMapRoute
          ? "pt-[4.75rem] lg:pt-[5.25rem]"
          : ""
      }`}
    >
      {/* Conditionally render the Header based on the route */}
      {!isLoginRoute && !isRegisterRoute && !isLiveThreatsMapRoute && (
        <Header />
      )}

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Threatsmap />
              <CyberAttackNews />
              <Benefits />
              <Collab />
              <Pricing />
            </>
          }
        />
        <Route path="/ransomware" element={<Ransomware />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Signup" element={<RegisterForm />} />
        <Route path="/LiveThreatsMap" element={<RealTimeMap />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/threats" element={<Threats />} />
        <Route path="/websimulation" element={<WebSimulation />} />
        <Route path="/news" element={<CyberAttackNews />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/spyware" element={<Spyware />} />
        <Route path="/botnets" element={<BotnetSimulation />} />
        <Route path="/zeroexploits" element={<Zeroexploits />} />
        <Route path="/phishing" element={<Phishing />} />
        <Route path="/Socialeng" element={<Socialeng />} />
      </Routes>

      <IncidentReportForm />
      {/* Button Gradient */}
      <ButtonGradient />
    </div>
  );
};

export default App;
