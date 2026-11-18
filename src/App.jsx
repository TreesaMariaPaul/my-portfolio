
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import ProfessionalKnowledge from "./pages/ProfessionalKnowledge";
import Blog from "./pages/Blog";
import Readme from "./pages/Readme";

// New pages
import Contact from "./pages/Contact";
import PictureGallery from "./pages/PictureGallery";
import VideoGallery from "./pages/VideoGallery";
import NotFound from "./pages/NotFound";

import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Existing pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />

        <Route
          path="/professional-knowledge"
          element={<ProfessionalKnowledge />}
        />

        <Route path="/blog" element={<Blog />} />
        <Route path="/readme" element={<Readme />} />

        {/* New pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/picture-gallery" element={<PictureGallery />} />
        <Route path="/video-gallery" element={<VideoGallery />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
