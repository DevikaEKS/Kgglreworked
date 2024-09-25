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
import DMBanner from './DigitalMarketing/DMBanner';
import Dmservice from './DigitalMarketing/Dmservice/Dmservice';
import Adoptdm from './DigitalMarketing/Adoptdm/Adoptdm';
import Dmcontact from './DigitalMarketing/Dmcontact/Dmcontact';
import Footerdm from './DigitalMarketing/Footerdm/Footerdm';
import Sapmenubar from './Sap/Sapmenubar/Sapmenubar';
import Menubardm from './DigitalMarketing/Menubardm/Menubardm';
import Hrmenubar from './HRRecruitment/Hrmenubar/Hrmenubar';
import BannerIT from './IT/BannerIT/BannerIT';
import Itfooter from './IT/ITFooter/Itfooter';
import CardCarousel from './IT/Cardcarousel';
import Dmblogview from './DigitalMarketing/DMblogview/Dmblogview';
import Dmblog from './DigitalMarketing/Dmblog/Dmblog';
import Sapblogview from './Sap/Sapblogview/Sapblogview';
import Contactpages from './Landingpage/Contactpages/Contactpages';
import Blogviewed from './Landingpage/Blogviewed/Blogviewed';
import Blogit from './IT/Blogit/Blogit';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={[<Menubar/>,<Banner/>,<Aboutus/>,<Ourservices/>,<Credentials/>,<Insights/>,<Contactpages/>, <Footercard/>,<Footer/>]}/>
      <Route path='/aboutus' element={[<Menubar/>,<AboutKggl/>,<Evolution/>,<Mission/>,<Whygeniuslabs/>,<Footercard/>,<Footerabout/>]}/> 
      <Route path='/HR_Consultancy' element={[<Hrmenubar/>,<Bannerhr/>,<Aboutpagehr/>,<Teamfeatures/>,<Sectors/>,<Clientpage/>,<Corevalues/>,<Discover/>,<Footercard/>,<Hrfooter/>]}/>
      <Route path='/blogs' element={[<Menubar/>,<Blogviewed/>]}/>
      <Route path='/imp' element={[<Sapimplementation/>,<Hanacloud/>,<Methodology/>,<Greenfield/>,<Newimplement/>,<Contactsap/>]}/>
      <Route path='/contact' element={[<Menubar/>,<Contactpage/>,<Footercard/>,<Footer/>]}/>
      <Route path='/SAP_Services_Consultancy' element={[<Sapmenubar/>,<Sapbanner/>]}/>
      <Route path='/IT_Services' element={[<BannerIT/>,<CardCarousel/>,<Itfooter/>]}/>
      <Route path='/Digital_Marketing_Consultancy' element={[<Menubardm/>,<DMBanner/>,<Dmservice/>,<Adoptdm/>,<Dmblog/>,<Dmcontact/>,<Footercard/>,<Footerdm/>]}/>
      <Route path='/Digital_Marketing_Blog' element={<Dmblogview/>}/>
      <Route path='/Sap_blog' element={<Sapblogview/>}/>
    <Route path='/IT_Blog' element={[<Menubar/>,<Blogit/>,<Footercard/>,<Footer/>]}/>
      </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
