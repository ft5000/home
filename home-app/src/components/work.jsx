import React from 'react';
import Carousel from "react-multi-carousel";
import { useState } from 'react';
import "react-multi-carousel/lib/styles.css";

function Work() {
    const isMobile = window.innerWidth <= 768;
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 1920, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    const [popoutSrc, setPopoutSrc] = useState("");

    function handlePopout(src) {
        setPopoutSrc(src);
    }

    const videoUrls = [
        "video/lorem_looped.mp4",
        "video/software.mp4",
        "video/fabric_v4.mp4",
        "video/excel_nightmare.mp4",
        "video/ascii_migraine.mp4"
    ];

    const imgUrls = [
        "dark_descent_5.png",
        "dark_descent_2.png",
        "dark_descent_3.png",
    ];

    return (
        <section className="projects">
            {popoutSrc && (
                <div className="popout-video" onClick={() => handlePopout("")}>
                    <video
                        src={popoutSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            )}
            <div className="sub-sect" style={{ backgroundColor: "gainsboro" }}>
                <div className="center-column">
                    <div className="flex-row">
                        <div className="sect-d right">
                            <h2>Motion Graphics & Creative Coding</h2>
                            <p>These are coding exercises created using Processing and the P5.js library.</p>
                        </div>
                        <div className="csl-container" style={{ flex: 1 }}>
                            <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
                                <Carousel
                                    partialVisible={false}
                                    centerMode={true}
                                    swipeable={true}
                                    draggable={true}
                                    arrows={true}
                                    keyBoardControl={true}
                                    autoPlay={true}
                                    autoPlaySpeed={5000}
                                    infinite={true}
                                    responsive={responsive}
                                >
                                    {videoUrls.map((url, index) => (
                                        <div className="csl-item" key={index} onClick={() => handlePopout(url)}>
                                            <video
                                                src={url}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                preload="auto"
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-sect white" style={{ backgroundColor: "black" }}>
                <div className="center-column">
                    <div className="flex-row wrap-reverse">
                        <div className="csl-container" style={{ flex: 1, overflow: "visible" }}>
                            <div style={{ width: "90%", maxWidth: "800px", margin: "0 auto", border: "2px dashed white", overflow: "hidden" }}>
                                <Carousel
                                    swipeable={true}
                                    draggable={true}
                                    arrows={true}
                                    keyBoardControl={true}
                                    autoPlay={true}
                                    infinite={true}
                                    autoPlaySpeed={10000}
                                    responsive={responsive}
                                >
                                    {imgUrls.map((url, index) => (
                                        <div className="csl-item" key={index}>
                                            <img
                                                src={url}
                                                alt={`Screenshot ${index + 1}`}
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                        <div className="sect-d left" style={{ flex: 1 }}>
                            <h2>Dark Descent</h2>
                            <p>Dark Descent is a text-based dungeon crawler RPG inspired by classic computer games. It features a responsive UI and is built with vanilla HTML, CSS, and Typescript as an exercise in object-oriented programming. The game includes multiple character classes, enemies, and items.</p>
                            <a className="btn" href="https://ft5000.github.io/dark-descent/" target="_blank" rel="noopener noreferrer">Play now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;