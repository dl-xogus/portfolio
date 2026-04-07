import '../css/BodyTagLine.scss'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Hero from './Hero.jsx'
import ProblemSolving from './ProblemSolving.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'

function BodyTagLine({ projects, openProject, showProjectsDetails }) {
    return (
        <div className={`body-wrap ${showProjectsDetails ? 'open' : ''}`}>
            <p className='tag top-tag html'>
                <span>{'<'}<span className='angle'>html</span>{'>'}</span>
            </p>
            <p className='tag bot-tag'>
                <span>{'</'}<span className='angle'>html</span>{'>'}</span>
            </p>

            <div className='tagAndDetail body-tag'>
                <div className='tag-line'>
                    <p className='tag top-tag'>
                        <span>{'<'}<span className='angle'>body</span>{'>'}</span>
                    </p>
                    <p className='tag bot-tag'>
                        <span>{'</'}<span className='angle'>body</span>{'>'}</span>
                    </p>
                </div>

                <div className='inner'>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects
                        projects={projects}
                        openProject={openProject}
                    />
                    <ProblemSolving />
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default BodyTagLine