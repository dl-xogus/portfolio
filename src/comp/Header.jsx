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
    const handleScroll = () => {
      const sections = document.querySelectorAll(".part");
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
      let current = "";

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= headerHeight + 1) {
          current = section.id;
        }
      });

      if (window.scrollY <= 50) {
        current = sections[0]?.id ?? current;
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom && sections.length > 0) {
        current = sections[sections.length - 1].id;
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
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
        <p className='img-wrap'><img src="./imgs/ic-right.svg" alt='icon'/></p>
        <p className='html-ic'>portfoilo</p>
      </div>
    </header>
  )
}

export default Header