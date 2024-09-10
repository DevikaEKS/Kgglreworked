import './App.css';
import Insights from './Landingpage/Insights/Insights';
import Aboutus from './Landingpage/Aboutus/Aboutus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Credentials from './Landingpage/Credentials/Credentials';
import Menubar  from './Landingpage/Menubar/Menubar';
import Contact from './Landingpage/Contact/Contact';
import Footer from './Landingpage/Footer/Footer';
import Footercard from './Landingpage/Footercard/Footercard';
import AboutKggl from './Aboutsection/AboutKggl/AboutKggl';
import Mission from './Mission/Mission';
import Banner from './Landingpage/Banner/Banner';
import Ourservices from './Landingpage/Ourservices/Ourservices';
import SwiperCard3D from './Landingpage/Swipingcard/Swipingcard';
import Whygeniuslabs from './Aboutsection/Whygeniuslabs/Whygeniuslabs';
import Teamfeatures from './HRRecruitment/Teamfeatures/Teamfeatures';
import Bannerhr from './HRRecruitment/Recruitment/Bannerhr/Bannerhr';
import Aboutpagehr from './HRRecruitment/Recruitment/Aboutpage/Aboutpage';
import Sectors from './HRRecruitment/Recruitment/Sectors/Sectors';
import Clientpage from './HRRecruitment/Recruitment/Clientpage/Clientpage';
import Corevalues from './HRRecruitment/Recruitment/Corevalues/Corevalues';
import {Evolution} from './Aboutsection/Evolution/Evolution';
import Blogpreview from './Blogs/Blogpreview/Blogpreview';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Menubar/>,<Banner/>,<Aboutus/>,<Ourservices/>,<Credentials/>,<Insights/>, <Contact/>, <Footercard/>,<Footer/>]}/>
       <Route path='/aboutus' element={[<Menubar/>,<AboutKggl/>,<Mission/>,<Evolution/>,<Whygeniuslabs/>,<Footercard/>,<Footer/>]}/> 
        <Route path='/d' element={<SwiperCard3D/>}/>
        {/* <Route path="/hr" element={[<Banner/>,<Aboutpage/>,<Teamfeatures/>,<Sectors/>,<Clientpage/>,<Corevalues/>]}/> */}
        <Route path='/hr' element={[<Menubar/>,<Bannerhr/>,<Aboutpagehr/>,<Teamfeatures/>,<Sectors/>,<Clientpage/>,<Corevalues/>,<Footercard/>,<Footer/>]}/>
      <Route path='/blog' element={<Blogpreview/>}/>
      </Routes>      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
