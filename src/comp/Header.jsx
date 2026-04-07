import { useEffect, useState } from 'react';
import '../css/Header.scss'

function Header() {
  const [activeSection, setActiveSection] = useState("");
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

  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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
        threshold: 0.5    // 50% 이상 보일 때
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
              onClick={e => {
                if (tab.name === 'Home') {
                  e.preventDefault();
                  moveTop();
                }
              }}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
      <div className='header-sub'>
        <p>taehyeon</p>
        <p className='img-wrap'><img src="./imgs/ic-right.svg"/></p>
        <p className='html-ic'>portfoilo</p>
      </div>
    </header>
  )
}

export default Header