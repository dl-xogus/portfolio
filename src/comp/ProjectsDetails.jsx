import { useEffect, useState } from 'react'
import '../css/ProjectsDetails.scss'

function ProjectsDetails({ projects, selectedProject, setshowProjectsDetails }) {
    const [tapOpen, setTapOpen] = useState(null);
    const [subOpen, setSubOpen] = useState({});

    useEffect(() => {
        setTapOpen(selectedProject);
    }, [selectedProject]);

    const toggleSub = (projectIndex, tabName) => {
        const key = `${projectIndex}-${tabName}`;                   // 탭 마다 고유 키 생성
        setSubOpen(prev => ({ ...prev, [key]: !prev[key] }));       // 배열에 저장
    };

    return (
        <div className='projectDetails' style={{ width: (tapOpen === null) ? '300px' : '950px' }}>
            <div className='side-inner' style={{ width: (tapOpen === null) ? '300px' : '950px' }}>
                <div className='PD-topBar'>
                    <p>PROJECTS</p>
                    <p className='x'
                        onClick={() => setshowProjectsDetails(false)}
                    >
                        <img src="./imgs/ic-x.svg" alt="icon"/>
                    </p>
                </div>

                <div className='pjs'>
                    {projects.map((item, i) => (
                        <div className='onetap' key={i}>
                            <div className='parent' onClick={() => setTapOpen(tapOpen === i ? null : i)}>
                                <div className='name'>
                                    <p className={`right-icon ${tapOpen === i ? 'active' : ''}`}><img src="./imgs/ic-right.svg" alt="icon"/></p>
                                    <p className='tap-name'>{item.title}</p>
                                </div>
                                <p><img src="./imgs/ic-editDot.svg" alt="icon"/></p>
                            </div>
                            {
                                <div className={`sub ${tapOpen === i ? 'tap-open' : ''}`}>
                                    <div className='thumb'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "thumb")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-thumb`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" alt="icon"/></p>
                                                <p className='tap-name'>🎨 대표 이미지</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <p className={`inside ${subOpen[`${i}-thumb`] ? 'tap-open' : ''}`}><img className='thumb-img' src={item.thumb} alt="썸네일이미지"/></p>
                                    </div>

                                    <div className='intro'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "intro")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-intro`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" alt="icon"/></p>
                                                <p className='tap-name'>✨ 소개</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <p className={`inside ${subOpen[`${i}-intro`] ? 'tap-open' : ''}`}>{item.intro}</p>
                                    </div>

                                    <div className='url'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "url")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-url`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" alt="icon"/></p>
                                                <p className='tap-name'>🔗 배포 URL</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <a className={`inside link ${subOpen[`${i}-url`] ? 'tap-open' : ''}`} href={item.url} target='_blank' rel="noreferrer">{item.url}</a>
                                    </div>

                                    <div className='github'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "github")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-github`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" alt="icon"/></p>
                                                <div className='github-title'>
                                                    <p className='img-wrap'><img src="./imgs/ic-github.svg" alt='icon'/></p>
                                                    <p className='tap-name'>GitHub</p>
                                                </div>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <a className={`inside link ${subOpen[`${i}-github`] ? 'tap-open' : ''}`} href={item.github} target='_blank' rel="noreferrer">{item.github}</a>
                                    </div>

                                    <div className='period'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "period")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-period`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" alt="icon"/></p>
                                                <p className='tap-name'>⏱️ 개발 기간</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <p className={`inside ${subOpen[`${i}-period`] ? 'tap-open' : ''}`}>{item.period}</p>
                                    </div>

                                    <div className='team'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "team")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-team`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" alt="icon"/></p>
                                                <p className='tap-name'>👥 구성원</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <p className={`inside ${subOpen[`${i}-team`] ? 'tap-open' : ''}`}>{item.team}</p>
                                    </div>

                                    <div className='contri'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "contri")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-contri`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" alt="icon"/></p>
                                                <p className='tap-name'>📌 기여도</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <p className={`inside ${subOpen[`${i}-contri`] ? 'tap-open' : ''}`}>
                                            개발: {item.contri.development}%<br />
                                            디자인: {item.contri.design}%<br />
                                            기획: {item.contri.planning}%
                                        </p>
                                    </div>

                                    <div className='stack'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "stack")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-stack`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" alt="icon"/></p>
                                                <p className='tap-name'>🛠️ 사용된 기술 스택</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <div className={`inside ${subOpen[`${i}-stack`] ? 'tap-open' : ''}`}>
                                            {item.stack.map((sk, i) => (
                                                <div key={i}>
                                                    <p className='img-wrap'><img src={sk.icon} alt="기술스택"/></p>
                                                    <p>{sk.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='func'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "func")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-func`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" alt="icon"/></p>
                                                <p className='tap-name'>⚡ 주요 기능</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <div className={`inside ${subOpen[`${i}-func`] ? 'tap-open' : ''}`}>
                                            {item.func.map((fun, i) => (
                                                <div key={i}>
                                                    <p>{i + 1}. {fun.func_name}</p>
                                                    <p className='text'>{fun.detail}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='issue'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "issue")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-issue`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" alt="icon"/></p>
                                                <p className='tap-name'>💥 개발 이슈</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <div className={`inside ${subOpen[`${i}-issue`] ? 'tap-open' : ''}`}>
                                            {item.issue.map((isu, i) => (
                                                <div key={i}>
                                                    <div className='is'>
                                                        <p className='red'>이슈</p>
                                                        <p className='text'>{isu.problem}</p>
                                                    </div>
                                                    <div className='is'>
                                                        <p className='blue'><span>└</span> 해결</p>
                                                        <p className='text'>{isu.solving}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='think'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "think")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-think`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" alt="icon"/></p>
                                                <p className='tap-name'>💭 개발 후 느낀점</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <p className={`inside ${subOpen[`${i}-think`] ? 'tap-open' : ''}`}>{item.think}</p>
                                    </div>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectsDetails