import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import ProfessionalKnowledge from "./pages/ProfessionalKnowledge";
import Blog from "./pages/Blog";

import Readme from "./pages/Readme";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/education" element={<Education />} />

        <Route
          path="/professional-knowledge"
          element={<ProfessionalKnowledge />}
        />

        <Route path="/blog" element={<Blog />} />

        
        <Route path="/readme" element={<Readme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;