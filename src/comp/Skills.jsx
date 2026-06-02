import '../css/Skills.scss'

function Skills() {
    const skills = [
        {
            title: "Frontend",
            item: [
                { name: "HTML5", icon: "./imgs/ic-html.svg" },
                { name: "CSS3", icon: "./imgs/ic-css.svg" },
                { name: "JavaScript", icon: "./imgs/ic-javascript.svg" },
                { name: "TypeScript", icon: "./imgs/ic-typescript.svg" },
                { name: "React", icon: "./imgs/ic-react.svg" },
                { name: "Next.js", icon: "./imgs/ic-nextjs.svg" },
                { name: "Vue", icon: "./imgs/ic-vue.svg" }
            ]
        },
        {
            title: "Libraries",
            item: [
                { name: "Axios", icon: "./imgs/ic-axios.svg" },
                { name: "Tailwind CSS", icon: "./imgs/ic-tailwindcss.svg" },
                { name: "jQuery", icon: "./imgs/ic-jquery.svg" },
                { name: "SCSS", icon: "./imgs/ic-scss.svg" },
                { name: "Zustand", icon: "./imgs/ic-zustand.svg" },
                { name: "NextAuth", icon: "./imgs/ic-nextauth.svg" },
                { name: "Pinia", icon: "./imgs/ic-pinia.svg" }
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
                                                <p className='icon-wrap'><img src={item.icon} alt='icon'/></p>
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