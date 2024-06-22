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

const App = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";
  const isRegisterRoute = location.pathname === "/Signup";

  return (
    <div
      className={`overflow-hidden ${
        !isLoginRoute && !isRegisterRoute ? "pt-[4.75rem] lg:pt-[5.25rem]" : ""
      }`}
    >
      {!isLoginRoute && !isRegisterRoute && <Header />}
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
        <Route path="/login" element={<LogIn />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Signup" element={<RegisterForm />} />
      </Routes>
      <ButtonGradient />
    </div>
  );
};

export default App;
