import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Classes from './pages/ClassesMain';
import Services from './pages/Services';
import Teachers from './pages/TeachersMain';
import ContactUs from './pages/ContactUs';

import LanguageClass from './pages/LanguageClass';
import DrawingClass from './pages/DrawingClass';
import MathematicsClass from './pages/MathematicsClass';
import SportsClass from './pages/SportsClass';
import KnowledgeClass from './pages/KnowledgeClass';
import ScienceClass from './pages/ScienceClass';

function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/classes" element={<Classes/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/teachers" element={<Teachers/>} />
        <Route path="/contactus" element={<ContactUs/>} />

        <Route path="/languageclass" element={<LanguageClass/>} />
        <Route path="/drawingclass" element={<DrawingClass/>} />
        <Route path="/mathematicsclass" element={<MathematicsClass/>} />
        <Route path="/sportsclass" element={<SportsClass/>} />
        <Route path="/knowledgeclass" element={<KnowledgeClass/>} />
        <Route path="/scienceclass" element={<ScienceClass/>} />

      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
