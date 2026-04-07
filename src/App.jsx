import { useEffect, useState } from 'react';

import './css/reset.css';
import './App.scss';

import Header from './comp/Header';
import BodyTagLine from './comp/BodyTagLine';
import Terminal from './comp/Terminal';
import ProjectsDetails from './comp/ProjectsDetails';
import projects from './projects.json'

function App() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [showProjectsDetails, setshowProjectsDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      /* 터미널 창 */
      if (e.ctrlKey && e.key === "j") {
        e.preventDefault();                 // 브라우저 기본동작 방지
        setShowTerminal(prev => !prev);     // 토글
      }
      /* 프로젝트 상세 창 */
      else if (e.ctrlKey && e.key === "b") {
        e.preventDefault();
        setshowProjectsDetails(prev => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      {showProjectsDetails && (
        <ProjectsDetails
          projects={projects}
          selectedProject={selectedProject}
          setshowProjectsDetails={setshowProjectsDetails}
        />
      )}
      <main>
        <Header />
        <div>
          <BodyTagLine
            showProjectsDetails={showProjectsDetails}
            projects={projects}
            openProject={(index) => {
              setSelectedProject(index);
              setshowProjectsDetails(true);
            }}
          />
          {showTerminal && (
            <Terminal setShowTerminal={setShowTerminal} />
          )}
        </div>
      </main>

    </div>
  );
}

export default App;
