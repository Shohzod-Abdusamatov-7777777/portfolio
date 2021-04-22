import React, { useEffect } from "react";
import { ScrollingProvider, Section } from "react-scroll-section";
import { BrowserRouter } from "react-router-dom";
import Particles from "react-tsparticles";
import Home from "./components/section/Home";
import Footer from "./components/section/Footer";
import Header from "./components/section/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

const App = () => {
  
    return (
        <BrowserRouter>
            <ScrollingProvider>
                <Header />
                <Section id="home">
                    <Home />
                  
                </Section>
                <Section id="about" className="bg-danger vh-100">
                    About section
                </Section>
                <Section id="projects" className="bg-primary vh-100">
                    projects section
                </Section>
                <Section id="contacts" className="bg-secondary vh-100">
                    contacts section
                </Section>
                <Footer />
            </ScrollingProvider>
        </BrowserRouter>
    );
};
export default App;
