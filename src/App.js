import React from "react";
import { ScrollingProvider, Section } from "react-scroll-section";
import Footer from "./components/section/Footer";
import Header from "./components/section/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";

const App = () => (
    <BrowserRouter>
        <ScrollingProvider>
            <Header />
            <Section id="home" className="bg-warning vh-100 ">
                Home section
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
export default App;
