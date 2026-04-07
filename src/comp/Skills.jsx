import '../css/Skills.scss'

function Skills() {
    const skills = [
        {
            title: "Frontend",
            item: [
                { name: "HTML5", icon: "./imgs/ic-html.svg" },
                { name: "CSS3", icon: "./imgs/ic-css.svg" },
                { name: "Javascript", icon: "./imgs/ic-javascript.svg" },
                { name: "React.js", icon: "./imgs/ic-react.svg" },
                { name: "Next.js", icon: "./imgs/ic-nextjs.svg" }
            ]
        },
        {
            title: "Libraries",
            item: [
                { name: "Axios", icon: "./imgs/ic-axios.svg" },
                { name: "Tailwind CSS", icon: "./imgs/ic-tailwindcss.svg" },
                { name: "jQuery", icon: "./imgs/ic-jquery.svg" },
                { name: "SCSS", icon: "./imgs/ic-scss.svg" }
            ]
        },
        {
            title: "Tools",
            item: [
                { name: "GitHub", icon: "./imgs/ic-github.svg" },
                { name: "Git", icon: "./imgs/ic-git.svg" },
                { name: "Vercel", icon: "./imgs/ic-vercel.svg" },
                { name: "MongoDB", icon: "./imgs/ic-mongodb.svg" }
            ]
        },
        {
            title: "Design",
            item: [
                { name: "Figma", icon: "./imgs/ic-figma.svg" },
                { name: "Photoshop", icon: "./imgs/ic-photoshop.svg" },
                { name: "Illustrator", icon: "./imgs/ic-illustrator.svg" }
            ]
        }
    ];

    return (
        <section id='skills' className='part'>
            <div className='skills'>
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
                            <b>Skills</b>
                        </div>
                    </div>

                    <div className='tagAndDetail'>
                        <div className='tag-line'>
                            <p className='tag top-tag'>
                                <span>{'<'}<span className='angle'>section</span>{'>'}</span>
                            </p>

                            <p className='tag bot-tag'>
                                <span>{'</'}<span className='angle'>section</span>{'>'}</span>
                            </p>
                        </div>

                        <section>
                            {skills.map((sk, i) => (
                                <div key={i}>
                                    <p className='note'>{`<!-- ${sk.title} -->`}</p>
                                    <div className='skills-figs'>
                                        {sk.item.map((item, j) => (
                                            <figure key={j}>
                                                <p><img src={item.icon} /></p>
                                                <figcaption>{item.name}</figcaption>
                                            </figure>
                                        ))}
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

export default Skills