import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from "./Footer";

export default function PortfolioContainer() {
  return (
    <div className="content-container">
      <Router>
        <NavTabs />
        <Routes>
          <Route
            path="/REACTWebDevPortfolio"
            element={
              <div className="content">
                <Home />
              </div>
            }
          />
          <Route
            path="/REACTWebDevPortfolio/about"
            element={
              <div className="content">
                <About />
              </div>
            }
          />
          <Route
            path="/REACTWebDevPortfolio/work"
            element={
              <div className="content">
                <Work />
              </div>
            }
          />
          <Route
            path="/REACTWebDevPortfolio/contact"
            element={
              <div className="content">
                <Contact />
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
