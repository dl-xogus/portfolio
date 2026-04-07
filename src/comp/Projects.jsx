import '../css/Projects.scss'

function Projects({ projects, openProject }) {
  return (
    <section id='projects' className='part'>
      <div className='projects'>
        <article className='details'>
          <div className='tagAndDetail hero-h1'>
            <div className='tag-line'>
              <p className='tag top-tag'>
                <span>{'<'}<span className='angle'>h2</span>{'>'}</span>
              </p>

              <p className='tag bot-tag'>
                <span>{'</'}<span className='angle'>h2</span>{'>'}</span>
              </p>
            </div>

            <div className='title'>
              <b>Projects</b>
            </div>
          </div>

          <div className='tagAndDetail'>
            <div className='tag-line'>
              <p className='tag top-tag'>
                <span>
                  {'<'}
                  <span className='angle'>
                    div
                    <span className='att'>
                      {' name'}
                      <span className='nomal'>
                        =
                        <b className='orange problem-name'>
                          "(ctrl + b)를 눌러 자세히 보기"
                        </b>
                      </span>
                    </span>
                  </span>
                  {'>'}
                </span>
              </p>

              <p className='tag bot-tag'>
                <span>{'</'}<span className='angle'>section</span>{'>'}</span>
              </p>
            </div>

            <section className='projects-section'>

              {projects.map((item, i) => (
                <div className='obj' key={i}>
                  <p className='img-wrap'
                    onClick={() => openProject(i)}
                  >
                    <img src={item.thumb} />
                  </p>

                  <div className='detail'>
                    <p className='project-name'
                      onClick={() => openProject(i)}
                    >
                      {item.title}
                    </p>
                    <p className='intro'>{item.simple_intro}</p>
                    <div className='vt'>
                      <small className='gray'>{item.period}</small>
                      <small className='orange'>{item.team}</small>
                    </div>
                    <div className='vt'>
                      <a className='pink' href={item.url} target="_blank">서비스 이동</a>
                      <a className='pink' href={item.github} target="_blank">GitHub</a>
                    </div>
                    <div className='icons'>
                      {item.stack.map((ic, j) => (
                        <p key={j}><img src={ic.icon} title={ic.name} /></p>
                      ))}

                    </div>
                  </div>
                </div>
              ))}

            </section>
          </div>
        </article>
      </div>
      <div className='section-line'></div>
    </section>
  )
}

export default Projects