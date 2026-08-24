import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AddProject from "./pages/AddProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Website */}
        <Route
          path="/"
          element={
            <main>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
          }
        />

        {/* Admin Panel */}
        <Route
          path="/admin"
          element={<AddProject />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;