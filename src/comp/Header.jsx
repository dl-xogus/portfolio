import { useEffect, useState } from 'react';
import '../css/Header.scss'

function Header({ showProjectsDetails }) {
  const [lightOnTap, setlightOnTap] = useState(null);
  const menu = [
    {
      name: "Home",
      id: "home"
    },
    {
      name: "About",
      id: "about"
    },
    {
      name: "Skills",
      id: "skills"
    },
    {
      name: "Projects",
      id: "projects"
    },
    {
      name: "Problem-Solving",
      id: "problem"
    },
    {
      name: "Contact",
      id: "contact"
    }
  ];

  const toggle = (i) => {
    setlightOnTap(lightOnTap === i ? null : i)
  };

  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll(".part");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <div className='header'>
        <nav>
          {menu.map((tab, i) => (
            <a key={i}
              className={activeSection === tab.id ? 'selected' : ''}
              href={`#${tab.id}`}
            >
              {tab.name}
            </a>
          ))}
          {/* <a
            className='selected'
            href="#about"
            onClick={() => { }}
          >
            About
          </a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#problem">Problem-Solving</a>
          <a href="#contact">Contact</a> */}
        </nav>
      </div>
    </header>
  )
}

export default Header