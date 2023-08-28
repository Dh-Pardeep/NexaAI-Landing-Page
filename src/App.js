import './App.css';
import './Root.css'
import AIPowered from './components/AIPowered';
import HeroSection from './components/HeroSection';
import UniqueFeatures from './components/UniqueFeatures';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Blockchain from './components/Blockchain';
import NexAIThreeSlider from './components/NexAIThreeSlider';
import WhatIsNexAi from './components/WhatIsNexAi';
import MyFooter from './components/common/MyFooter';
import ReadyGetStarted from './components/ReadyGetStarted';
import NexAIToken from './components/NexAIToken';
import BackToTop from './components/common/BackToTop';
import LoaderHome from './components/common/LoaderHome';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, [])
  return (
    <>
      <div className='Bg_Color overflow-hidden'>
        <LoaderHome/>
        <BackToTop/>
        <HeroSection />
        <AIPowered/>
        <UniqueFeatures/>
        <Blockchain/>
        <NexAIThreeSlider/>
        <WhatIsNexAi/>
        <NexAIToken/>
        <ReadyGetStarted/>
        <MyFooter/>
      </div>
    </>
  );
}

export default App;
