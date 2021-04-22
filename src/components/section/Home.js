import React from "react";
import { useScrollSections } from "react-scroll-section";
import Particles from "react-tsparticles";

const Home = () => {
    const sections = useScrollSections();
  

    return (
        <div className="layout-section home">
            <div style={{height:"calc(100vh - 60px)",width:"100%"}}>
                 <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: {
                            value: "#000",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 80,
                            },
                            push: {
                                quantity: 5,
                            },
                            repulse: {
                                distance: 400,
                                duration: 0.8,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 1000,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "star",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            </div>
            <div className="container" style={{position:"absolute",left:0,right:0,}}>
                <div className="row  pt-5">
                    <div className="col-md-6 col-10 home__content mx-auto pb-md-0 pb-5">
                        <h3 className="text-yellow">Hello!</h3>
                        <h1 className="text-yellow home__title">
                            <span style={{ color: "#fff" }}>I'M&nbsp;</span>SHohzod Abdusamatov
                        </h1>
                        <p className="home__p">A Frontend Developer 1 years Experience</p>
                        <div>
                            <button type="button" className="home__btn">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                {sections
                                    .filter(({ id }) => id === "projects")
                                    .map(({ id, onClick, selected }) => (
                                        <li key={id} onClick={onClick} selected={selected}>
                                            {id}
                                        </li>
                                    ))}
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 col-10 home__img mx-auto"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
