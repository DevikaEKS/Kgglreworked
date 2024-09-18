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
import Mission from './Aboutsection/Mission/Mission';
import Banner from './Landingpage/Banner/Banner';
import Ourservices from './Landingpage/Ourservices/Ourservices';
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
import Sapimplementation from './Sap/Sapimplementation/Sapimplementation';
import Hanacloud from './Sap/Hanacloud/Hanacloud';
import Methodology from './Sap/Methodology/Methodology';
import Greenfield from './Sap/Greenfield/Greenfield';
import Newimplement from './Sap/Newimplement/Newimplement';
import Contactpage from './Landingpage/Contactpage/Contactpage';
import Contactsap from './Sap/Contactsap/Contactsap';
import Hrfooter from './HRRecruitment/Hrfooter/Hrfooter';
import Footerabout from './Aboutsection/Footerabout/Footerabout';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={[<Menubar/>,<Banner/>,<Aboutus/>,<Ourservices/>,<Credentials/>,<Insights/>, <Contact/>, <Footercard/>,<Footer/>]}/>
      <Route path='/aboutuspage' element={[<Menubar/>,<AboutKggl/>,<Evolution/>,<Mission/>,<Whygeniuslabs/>,<Footercard/>,<Footerabout/>]}/> 
      <Route path='/hr' element={[<Menubar/>,<Bannerhr/>,<Aboutpagehr/>,<Teamfeatures/>,<Sectors/>,<Clientpage/>,<Corevalues/>,<Footercard/>,<Hrfooter/>]}/>
      <Route path='/blogs' element={[<Menubar/>,<Blogpreview/>]}/>
      <Route path='/imp' element={[<Sapimplementation/>,<Hanacloud/>,<Methodology/>,<Greenfield/>,<Newimplement/>,<Contactsap/>]}/>
      <Route path='/contact' element={[<Menubar/>,<Contactpage/>,<Footercard/>,<Footer/>]}/>
      <Route path='/sapb' element={[<Menubar/>,<Sapbanner/>]}/>
      </Routes>      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
