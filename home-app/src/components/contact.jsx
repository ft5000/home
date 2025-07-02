import React, { useEffect } from 'react';

    const Contact = () => {
        setInterval(() => {
            const chars = '/o8888o `;|||`.`:;@.'
            const text = document.getElementById('ascii').innerHTML.split('')
            const idx = Math.floor(Math.random() * text.length)
            if (Math.random() < 0.5) {
                const randomChar = chars[Math.floor(Math.random() * chars.length)]
                text[idx] = randomChar;
                document.getElementById('ascii').innerHTML = text.join('')
            }
    }, 60)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const bg = document.querySelector('.plx-bg');
            const section = document.getElementsByClassName('about')[0];
            const shouldScroll = scrollY + window.innerHeight > section.offsetTop;;
            if (bg && shouldScroll) {
            const isMobile = window.innerWidth <= 768;
                const scrollDistance = Math.abs(scrollY - section.offsetTop);
                bg.style.transform = isMobile ? `translate(-50%, -${scrollDistance * 0.5}px)` : `translate(-50%, -${scrollDistance * 0.5}px)`;
            }
        };
    
        window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    return (
        <section className="contact">
            <div className="center-column small flex-col flex-center" style={{color: "#525559", zIndex: "1", position: "relative"}}>
                <h2 style={{width: "fit-content", margin: "0 1.5rem", marginBottom: "1rem", color: "black"}}>Contact</h2>
                <div className="flex-row flex-center" style={{flexWrap: "nowrap", zIndex: "1"}}>
                    <div style={{flex: 1, textAlign: "right", paddingRight: "1rem", width: "50%"}}>
                        <div className="flex-col flex-center" style={{height: "100%"}}>
                            <div>
                                <ol style={{listStyle: "none", paddingLeft: "1.5em", margin: 0}}>
                                    <li style={{display: "flex", alignItems: "center", marginBottom: "1rem"}}>
                                        1.
                                        <span style={{flex: 1, borderBottom: "1px dashed #525559", marginRight: "0.5rem"}}></span>
                                        <a href="mailto:fabian.tjernstrom@gmail.com" rel="noopener noreferrer">E-Mail</a>
                                    </li>
                                    <li style={{display: "flex", alignItems: "center", marginBottom: "1rem"}}>
                                        2.
                                        <span style={{flex: 1, borderBottom: "1px dashed #525559", marginRight: "0.5rem"}}></span>
                                        <a href="https://www.linkedin.com/in/fabian-tjernstr%C3%B6m-b6028520a/" target="_blank">LinkedIn</a>
                                    </li>
                                    <li style={{display: "flex", alignItems: "center"}}>
                                        3.
                                        <span style={{flex: 1, borderBottom: "1px dashed #525559", marginRight: "0.5rem"}}></span>
                                        <a href="https://github.com/ft5000" target="_blank">GitHub</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                <div style={{
                    flex: 1,
                    maxWidth: "50%",
                    height: "106px",
                    overflow: "hidden",
                    textOverflow: "clip"
                }}>
                    {/* <img src="deep_forest_1.png" className="contact-img" /> */}
                    <span id="ascii" style={{color: "lightblue"}}>                       
                                            ,.
                                            |`:.
                                            |  `:.
                                            | |`.`:;@.
                                            | |;.`.`;|
                                            ; `.';| ||
                                           ,(`;.`.| ||
                                          /8o (`:.  ||
                                        /o8888o  `; ||
                                     /@o8888888o (`;|
                                    (`.()oO888888o (
                                   `.`.;:oO08c{} )/ |
                                        `.`.(),0 /  /
                                        `.`.`/  /
                                        `.( /
                    </span>
                </div>
                </div>
                <img id="bot-left-img" src="icon_sun_1.png"/>
            </div>
            <img
                src="favicon1.png"
                style={{
                    width: "2rem",
                    position: "absolute",
                    bottom: "8%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    mixBlendMode: "difference",
                    userSelect: "none",
                    zIndex: "1"
                }}
            />
        </section>
    );
};

export default Contact;