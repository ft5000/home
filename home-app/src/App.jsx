import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/home'
import About from './components/about'
import Work from './components/work'
import { useEffect } from 'react'
import './App.css'
import Contact from './components/contact'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  function scrollToSection(selector) {
    const element = document.getElementsByClassName(selector)[0];
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  setInterval(() => {
    const chars = '#$*ft5000_web'
    const title = document.title.split('')
    const idx = Math.floor(Math.random() * title.length)
    if (Math.random() < 0.1) {
      const randomChar = chars[Math.floor(Math.random() * chars.length)]
      title[idx] = randomChar
      document.title = title.join('')
    }
  }, 60)

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          const topSection = visibleEntries[0]
          if (topSection.target.className === 'about') {
            document.getElementById('bot-right-img')?.classList.add('fade-in');
                        document.getElementById('wiz-img')?.classList.add('fade-in');
          }
          else {
            document.getElementById('bot-right-img')?.classList.remove('fade-in');
                        document.getElementById('wiz-img')?.classList.remove('fade-in');
          }
          if (topSection.target.className === 'contact') {
            document.getElementsByClassName('arrow-down')[0].style.opacity = '0'
            document.getElementsByClassName('contact-img')[0]?.classList.add('fade-in');
            document.getElementById('bot-left-img')?.classList.add('fade-in');
          }
          else {
            document.getElementsByClassName('arrow-down')[0].style.opacity = '1'
            document.getElementsByClassName('contact-img')[0]?.classList.remove('fade-in');
            document.getElementById('bot-left-img')?.classList.remove('fade-in');
          }
        }
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const [menuExpanded, setMenuExpanded] = useState(false);

  function toggleMenu() {
    setMenuExpanded(prev => !prev);
  }

  useEffect(() => {
    const handleScroll = () => setMenuExpanded(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <nav>
        <button onClick={toggleMenu}>
          <i className={`fa-solid ${menuExpanded ? "fa-x" : "fa-bars"}`}></i>
        </button>
        <div className={`nav-list${menuExpanded ? " expanded" : ""}`}>
          <button className="btn" onClick={() => scrollToSection('home')}>Home</button>
          <button className="btn" onClick={() => scrollToSection('about')}>About</button>
          <button className="btn" onClick={() => scrollToSection('projects')}>Projects</button>
          <button className="btn" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </nav>
      <Home />
      <About />
      <Work />
      <Contact />
      <img className="arrow-down" src="arrow_down_1.png" style={{visibility: "visible"}} />
    </main>
  )
}

export default App
