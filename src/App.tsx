import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

// Pages
import Home from './pages/page';
import About from './pages/about/page';
import Blog from './pages/blog/page';
import BlogPost from './pages/blog/[slug]/page';
import Contact from './pages/contact/page';
import DesignProcess from './pages/design-process/page';
import Faq from './pages/faq/page';
import Materials from './pages/materials/page';
import MaterialDetails from './pages/materials/[slug]/page';
import Portfolio from './pages/portfolio/page';
import PortfolioProject from './pages/portfolio/[slug]/page';
import PrivacyPolicy from './pages/privacy-policy/page';
import Services from './pages/services/page';
import ServiceDetails from './pages/services/[slug]/page';
import TermsConditions from './pages/terms-conditions/page';
import WhyChooseUs from './pages/why-choose-us/page';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-teal-900 bg-warmwhite antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/design-process" element={<DesignProcess />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/materials/:slug" element={<MaterialDetails />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<PortfolioProject />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
          </Routes>
        </main>
        <Footer />
        <MobileActionBar />
      </div>
    </Router>
  );
}

export default App;
