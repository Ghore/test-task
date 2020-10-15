import React from "react";
import "./sass/section/app.scss";
import Header from "./Components/Header/Header";
import FirstSection from "./Components/FirstSection/FirstSection";
import SecondSection from "./Components/SecondSection/SecondSection";
import ThirdSection from "./Components/ThirdSection/ThirdSection";
import FourSection from "./Components/FourSection/FourSection";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <Footer />
    </>
  );
}

export default App;
