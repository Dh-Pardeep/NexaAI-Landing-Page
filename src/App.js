import './App.css';
import './Root.css'
import AIPowered from './components/AIPowered';
import HeroSection from './components/HeroSection';
import UniqueFeatures from './components/UniqueFeatures';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Blockchain from './components/Blockchain';
function App() {
  return (
    <>
      <div className='Bg_Color'>
        {/* <HeroSection />
        <AIPowered/>
        <UniqueFeatures/> */}
        <Blockchain/>
      </div>
    </>
  );
}

export default App;
