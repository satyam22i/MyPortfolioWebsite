import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import Blogs from "./components/Blogs";
import FeaturedWorks from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";
import Admin from "./components/admin";
import AdminProjectUpload from "./components/adminproject";
import ContactMe from "./components/contactMe";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Blogs />
                <FeaturedWorks />
                <Footer />
              </>
            }
          />
          <Route path="/content" element={<FeaturedWorks />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminproject" element={<AdminProjectUpload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
