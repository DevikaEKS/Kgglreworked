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
import Discover from './HRRecruitment/Discover/Discover';
import Hrfootercard from './HRRecruitment/Hrfootercard/Hrfootercard';
import Sapbanner from './Sap/Sapbanner/Sapbanner';
import Sapsupport from './Sap/Sapsupport/Sapsupport';
import Analysis from './Sap/Analysis/Analysis';
import Valueadded from './Sap/Valueadded/Valueadded';
import Sapimplementation from './Sap/Sapimplementation/Sapimplementation';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={[<Menubar/>,<Banner/>,<Aboutus/>,<Ourservices/>,<Credentials/>,<Insights/>, <Contact/>, <Footercard/>,<Footer/>]}/>
      <Route path='/aboutus' element={[<Menubar/>,<AboutKggl/>,<Evolution/>,<Mission/>,<Whygeniuslabs/>,<Footercard/>,<Footer/>]}/> 
      <Route path='/d' element={<SwiperCard3D/>}/>
      <Route path='/hr' element={[<Menubar/>,<Bannerhr/>,<Aboutpagehr/>,<Teamfeatures/>,<Sectors/>,<Clientpage/>,<Corevalues/>,,<Discover/>,<Hrfootercard/>,<Footer/>]}/>
      <Route path='/blog' element={[<Menubar/>,<Blogpreview/>]}/>
      <Route path='/sap' element={[<Sapbanner/>,<Sapsupport/>,<Footercard/>,<Footer/>]}/>
      <Route path='/analyse' element={[<Sapbanner/>,<Analysis/>]}/>
      <Route path='/valueadded' element={[<Sapbanner/>,<Valueadded/>,<Footercard/>,<Footer/>]}/>
      <Route path='/imp' element={<Sapimplementation/>}  />
      </Routes>      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
