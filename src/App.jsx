import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import StartExperience from "./components/StartExperience";
import { useState } from "react";

function App() {
  const [isExperienceStarted, setIsExperienceStarted] = useState(false);
  return (
    <>
      <StartExperience
        isExperienceStarted={isExperienceStarted}
        setIsExperienceStarted={setIsExperienceStarted}
      />
      <Header />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
