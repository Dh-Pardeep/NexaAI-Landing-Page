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
function App() {
  return (
    <>
      <div className='Bg_Color'>
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
