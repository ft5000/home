import React from 'react';
import Dragdrop from './dragdrop';

function Home() {
  function scrollToSection(selector) {
      const element = document.getElementsByClassName(selector)[0];
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  }
  return (
    <section className="home">
      {/* <div style={{
        position: "absolute",
        top: 0,
        height: "10vw",
        display: "flex",
        width: "100%",
        zIndex: 2,
        justifyContent: "center"
      }}>
          <button
            className="btn"
            style={{
              margin: "auto",
              width: "fit-content",
              transform: "translateY(50%)"
            }}
            onClick={() => scrollToSection('projects')}
          >
              projects
          </button>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        height: "100vh",
        display: "flex",
        width: "10vw",
        zIndex: 2,
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <span style={{margin: "auto"}}>
          <button
            className="btn"
            style={{
              transform: "translateX(50%) rotate(-90deg)",
              margin: "0",
              width: "fit-content"
            }}
            onClick={() => scrollToSection('about')}
          >
              about
          </button>
        </span>
      </div>
      <div style={{
        position: "absolute",
        right: 0,
        height: "100vh",
        display: "flex",
        width: "10vw",
        zIndex: 2,
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <span style={{margin: "auto"}}>
          <button
            className="btn"
            style={{
              transform: "translateX(-50%) rotate(90deg)",
              margin: "0",
              width: "fit-content"
            }}
            onClick={() => scrollToSection('contact')}
          >
              contact
          </button>
        </span>
      </div> */}

      <div className="sym-cont">
        <Dragdrop>
          <img src="/icon_sun_1.png" draggable={false} />
          <img src="/icon_hand_1.png" draggable={false} />
          <img src="/icon_radius_1.png" draggable={false} />
          <img src="/icon_wheel_1.png" draggable={false} />
        </Dragdrop>
        {/* <img src="/icon_sun_1.png" />
        <img src="/icon_hand_1.png" />
        <img src="/icon_radius_1.png" />
        <img src="/icon_wheel_1.png" /> */}
      </div>
    </section>
  );
}

export default Home;