// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./features/Home";
import MainLayout from "./components/layouts/MainLayout";
import About from "./features/About";
import Projects from "./features/Projects";
import Skills from "./features/Skills";
import Contact from "./features/Contact";
import Experience from "./features/Experience";
import Education from "./features/Education";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
