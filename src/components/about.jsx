function About() {
    return (
        <section className="about">
            <div className="center-column small" style={{position: "relative", paddingTop: "3rem", zIndex: "1"}}>
                <div style={{padding: "0 1rem", marginBottom: "2rem"}}>
                    <h2>About</h2>
                    <p>I'm Fabian, a software engineer and web designer based in Stockholm, Sweden.</p>
                    <p>With a background in software development and computer programming, I have over three years of professional experience working on web projects in agile teams. I'm comfortable collaborating with clients and contributing across the development process, from concept to deployment.</p>
                    <p>Outside of work, I'm a creative hobbyist, exploring new tools, techniques, and technologies.</p>
                    <br />
                    <div className="flex-row flex-center" style={{flexWrap: "nowrap"}}>
                        <img id="wiz-img" src="wiz_1.png" />
                    </div>
                </div>
            </div>
            {/* <img id="bot-right-img" src="icon_sun_1.png"/> */}
        </section>
    );
}

export default About;