import React from "react";
import { Outlet, Route } from "react-router-dom"; // Import Outlet and Route

import AboutMe from "../pages/AboutMe";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

// Content function define
function Content() {
  return (
    <main>
      {/* Used Outlet to render nested routes */}
      <Outlet />
      {/* Defined routes */}
      <Route path="/about" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </main>
  );
}

// Content component exported for use in other parts of the app
export default Content;
