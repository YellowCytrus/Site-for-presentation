import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Services from "./components/Services";
import Standards from "./components/Standards";
import Cooperation from "./components/Cooperation";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-textMain selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Services />
        <Standards />
        <Cooperation />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default App;