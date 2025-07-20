import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./features/Home";
import About from "./features/About";
import Projects from "./features/Projects";
import Skills from "./features/Skills";
import Contact from "./features/Contact";
import Experience from "./features/Experience";
import Academic from "./features/Academic";
import Certifications from "./features/Certifications";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="skills" element={<Skills />} />
        <Route path="academic" element={<Academic />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
export default App;
