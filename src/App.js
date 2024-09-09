import logo from './logo.svg';
import './App.css';
import Insights from './Landingpage/Insights/Insights';
import Aboutus from './Landingpage/Aboutus/Aboutus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Credentials from './Landingpage/Credentials/Credentials';
import Menubar  from './Landingpage/Menubar/Menubar';
import Contact from './Landingpage/Contact/Contact';
import Footer from './Landingpage/Footer/Footer';
import Footercard from './Landingpage/Footercard/Footercard';
import AboutKggl from './AboutKggl/AboutKggl';
import Mission from './Mission/Mission';
import Banner from './Landingpage/Banner/Banner';
import Ourservices from './Landingpage/Ourservices/Ourservices';
import SwiperCard3D from './Landingpage/Swipingcard/Swipingcard';
import Whygeniuslabs from './AboutKggl/Whygeniuslabs/Whygeniuslabs';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Menubar/>,<Banner/>,<Aboutus/>,<Credentials/>,<Ourservices/>,<Insights/>, <Contact/>, <Footercard/>,<Footer/>]}/>
        {/* <Route path='/aboutus' element={[<Menubar/>,<AboutKggl/>,<Mission/>,<Whygeniuslabs/>,<Footercard/>,<Footer/>]}/> */}
        <Route path='/d' element={<SwiperCard3D/>}/>
        {/* <Route path='/s' element={<Swipercard/>}/> */}
      </Routes>      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
