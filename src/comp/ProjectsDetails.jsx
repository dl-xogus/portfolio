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

    //     const projects1 = [
    //         {
    //             title: "SCREEN",
    //             thumb: "./imgs/img-SCREEN.jpg",
    //             intro: `이 프로젝트는 TMDB API를 기반으로 영화와 TV 콘텐츠 정보를 탐색할 수 있는 웹 서비스입니다.
    // 사용자는 최신 인기 작품, 추천 콘텐츠, 배우 필모그래피 등을 확인하고 다양한 OTT 플랫폼에서 제공되는 작품 정보를 쉽게 찾아볼 수 있습니다.
    // 직관적인 UI와 인터랙션을 통해 콘텐츠를 탐색하는 재미를 제공하며, 검색 기능과 필터링을 통해 원하는 영화와 TV 프로그램을 빠르게 발견할 수 있습니다. 또한 가로 슬라이드, 팝업 상세 정보 등 다양한 UI 요소를 활용하여 사용자 경험을 향상시키는 것을 목표로 합니다.`,
    //             url: "https://dl-xogus.github.io/screen/",
    //             github: "https://github.com/dl-xogus/screen",
    //             period: "2026.01.31 ~ 2026.03.09",
    //             team: "팀 프로젝트 (3명)",
    //             contri: {
    //                 development: "0",
    //                 design: "0",
    //                 planning: "0"
    //             },
    //             stack: [
    //                 {
    //                     name: "HTML5",
    //                     icon: "./imgs/ic-html.svg"
    //                 },
    //                 {
    //                     name: "CSS3",
    //                     icon: "./imgs/ic-css.svg"
    //                 },
    //                 {
    //                     name: "Javascript",
    //                     icon: "./imgs/ic-javascript.svg"
    //                 },
    //                 {
    //                     name: "jQuery",
    //                     icon: "./imgs/ic-jquery.svg"
    //                 },
    //                 {
    //                     name: "GitHub",
    //                     icon: "./imgs/ic-github.svg"
    //                 },
    //                 {
    //                     name: "Git",
    //                     icon: "./imgs/ic-git.svg"
    //                 },
    //                 {
    //                     name: "TMDB API",
    //                     icon: "./imgs/ic-tmdb.svg"
    //                 },
    //                 {
    //                     name: "Figma",
    //                     icon: "./imgs/ic-figma.svg"
    //                 },
    //             ],
    //             func: [
    //                 {
    //                     func_name: "콘텐츠 탐색",
    //                     detail: "영화 및 TV 프로그램 검색 및 결과 제공"
    //                 },
    //                 {
    //                     func_name: "콘텐츠 정보 확인",
    //                     detail: "줄거리, 평점, 장르, 개봉일, 출연 배우 등 상세 정보 확인"
    //                 },
    //                 {
    //                     func_name: "인물 정보",
    //                     detail: "인물 상세 페이지 및 필모그래피 제공"
    //                 },
    //                 {
    //                     func_name: "콘텐츠 추천",
    //                     detail: "인기 콘텐츠, 추천 콘텐츠, 최신순 정렬 제공"
    //                 },
    //                 {
    //                     func_name: "OTT 제공 정보",
    //                     detail: "Netflix, Apple TV, Disney+, TVING, wavve 등 시청 가능 플랫폼 확인"
    //                 },
    //                 {
    //                     func_name: "인터렉션 UI",
    //                     detail: "가로 슬라이드 리스트, 드래그 스크롤, 상세 정보 팝업, 검색 UI 인터랙션"
    //                 },
    //             ],
    //             issue: [
    //                 {
    //                     problem: "TMDB API에서 배우의 필모그래피 데이터를 가져올 때 영화와 TV콘텐츠가 서로 다른 날짜 속성을 사용하고 있어 정렬이 정상적으로 동작하지 않는 문제가 발생하였습니다.",
    //                     solving: "두 속성 중 존재하는 값을 선택하도록(release_date || first_credit_air_date) 조건을 설정한 뒤 최신순 정렬하였습니다."
    //                 },
    //                 {
    //                     problem: "콘텐츠의 OTT제공 플랫폼을 표시할 때 TMDB API의 watch provider 데이터가 flatrate, rent, buy 세 가지 카테고리로 나누어 제공되어 동일한 OTT 서비스가 여러 카테고리에 동시에 포함되어 있어 여러번 출력는 문제 발생",
    //                     solving: "flatrate, rent, buy의 데이터를 하나의 배열로 합친 뒤 provider_id 기준으로 중복을 제거하여 동일한 OTT 플랫폼은 한 번만 출력하도록 처리 하였습니다."
    //                 },
    //                 {
    //                     problem: "메인 페이지 콘텐츠 영역에서 드래그 가능한 UI를 구현하는 과정에서 마우스를 이동할 때 커서 상태가 계속 변경되어 깜빡이는 문제가 발생하였습니다.",
    //                     solving: "mouseover 이벤트가 부모 요소뿐 아니라 내부의 모든 자식 요소에서도 반복적으로 발생했기 때문에 이벤트가 과도하게 실행되었는데 closest() 매서드를 활용하여 실제 드래그 영역에 해당하는 요소에서만 이벤트가 실행 되도록 조건을 추가하였습니다."
    //                 }
    //             ],
    //             think: `TMDB API를 활용해 영화 데이터를 받아와 동적으로 렌더링하는 웹페이지를 구현하였습니다.
    // API 응답 데이터 구조를 분석하고 필요한 데이터를 가공하는 과정에서 데이터 처리와 디버깅 능력을 향상시켰으며, JavaScript를 이용한 DOM 조작과 사용자 인터랙션 처리 방식을 익혔습니다.`
    //         },
    //         {
    //             title: "웹 포트폴리오",
    //             thumb: "",
    //             intro: ``,
    //             url: "",
    //             github: "",
    //             period: "2026.00.00 ~ 2026.00.00",
    //             contri: {
    //                 development: "0",
    //                 design: "0",
    //                 planning: "0"
    //             },
    //             stack: [
    //                 {
    //                     name: "",
    //                     icon: ""
    //                 }
    //             ],
    //             func: [
    //                 {
    //                     func_name: "",
    //                     detail: ""
    //                 }
    //             ],
    //             issue: [
    //                 {
    //                     problem: "",
    //                     solving: ""
    //                 }
    //             ],
    //             think: ``
    //         },
    //         {
    //             title: "프로젝트 제목",
    //             thumb: "",
    //             intro: ``,
    //             url: "",
    //             github: "",
    //             period: "2026.00.00 ~ 2026.00.00",
    //             contri: {
    //                 development: "0",
    //                 design: "0",
    //                 planning: "0"
    //             },
    //             stack: [
    //                 {
    //                     name: "",
    //                     icon: ""
    //                 }
    //             ],
    //             func: [
    //                 {
    //                     func_name: "",
    //                     detail: ""
    //                 }
    //             ],
    //             issue: [
    //                 {
    //                     problem: "",
    //                     solving: ""
    //                 }
    //             ],
    //             think: ``
    //         }
    //     ];

    return (
        <div className='projectDetails' style={{ width: (tapOpen === null) ? '300px' : '950px' }}>
            <div className='side-inner' style={{ width: (tapOpen === null) ? '300px' : '950px' }}>
                <div className='PD-topBar'>
                    <p>PROJECTS</p>
                    <p className='x'
                        onClick={() => setshowProjectsDetails(false)}
                    >
                        <img src="./imgs/ic-x.svg" />
                    </p>
                </div>

                <div className='pjs'>
                    {projects.map((item, i) => (
                        <div className='onetap' key={i}>
                            <div className='parent' onClick={() => setTapOpen(tapOpen === i ? null : i)}>
                                <div className='name'>
                                    <p className={`right-icon ${tapOpen === i ? 'active' : ''}`}><img src="./imgs/ic-right.svg" /></p>
                                    <p className='tap-name'>{item.title}</p>
                                </div>
                                <p><img src="./imgs/ic-editDot.svg" /></p>
                            </div>
                            {
                                <div className={`sub ${tapOpen === i ? 'tap-open' : ''}`}>
                                    <div className='thumb'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "thumb")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-thumb`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" /></p>
                                                <p className='tap-name'>🎨 대표 이미지</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <p className={`inside ${subOpen[`${i}-thumb`] ? 'tap-open' : ''}`}><img className='thumb-img' src={item.thumb} /></p>
                                    </div>

                                    <div className='intro'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "intro")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-intro`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" /></p>
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
                                                <p className={`right-icon ${subOpen[`${i}-url`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" /></p>
                                                <p className='tap-name'>🔗 배포 URL</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <a className={`inside link ${subOpen[`${i}-url`] ? 'tap-open' : ''}`} href={item.url} target='_black'>{item.url}</a>
                                    </div>

                                    <div className='github'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "github")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-github`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" /></p>
                                                <div className='github-title'>
                                                    <p className='img-wrap'><img src="./imgs/ic-github.svg" /></p>
                                                    <p className='tap-name'>GitHub</p>
                                                </div>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <a className={`inside link ${subOpen[`${i}-github`] ? 'tap-open' : ''}`} href={item.github} target='_black'>{item.github}</a>
                                    </div>

                                    <div className='period'>
                                        <div className='title'
                                            onClick={() => toggleSub(i, "period")}
                                        >
                                            <div>
                                                <p className={`right-icon ${subOpen[`${i}-period`] ? 'active' : ''}`}><img src="./imgs/ic-right.svg" /></p>
                                                <p className='tap-name'>⏱️ 개발 기간</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <p className={`inside ${subOpen[`${i}-period`] ? 'tap-open' : ''}`}>{item.period}</p>
                                    </div>

                                    <div className='team'>
                                        <div className='title'>
                                            <div>
                                                <p className={`right-icon ${tapOpen === i ? 'active' : ''}`}><img src="./imgs/ic-right.svg" /></p>
                                                <p className='tap-name'>👥 구성원</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <p className='inside'>{item.team}</p>
                                    </div>

                                    <div className='contri'>
                                        <div className='title'>
                                            <div>
                                                <p className={`right-icon ${tapOpen === i ? 'active' : ''}`}><img src="./imgs/ic-right.svg" /></p>
                                                <p className='tap-name'>📌 기여도</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <p className='inside'>
                                            개발: {item.contri.development}%<br />
                                            디자인: {item.contri.design}%<br />
                                            기획: {item.contri.planning}%
                                        </p>
                                    </div>

                                    <div className='stack'>
                                        <div className='title'>
                                            <div>
                                                <p className={`right-icon ${tapOpen === i ? 'active' : ''}`}><img src="./imgs/ic-right.svg" /></p>
                                                <p className='tap-name'>🛠️ 사용된 기술 스택</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <div className='inside'>
                                            {item.stack.map((sk, i) => (
                                                <div key={i}>
                                                    <p className='img-wrap'><img src={sk.icon} /></p>
                                                    <p>{sk.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='func'>
                                        <div className='title'>
                                            <div>
                                                <p className={`right-icon ${tapOpen === i ? 'active' : ''}`}><img src="./imgs/ic-right.svg" /></p>
                                                <p className='tap-name'>⚡ 주요 기능</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <div className='inside'>
                                            {item.func.map((fun, i) => (
                                                <div key={i}>
                                                    <p>{i + 1}. {fun.func_name}</p>
                                                    <p className='text'>{fun.detail}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className='issue'>
                                        <div className='title'>
                                            <div>
                                                <p className={`right-icon ${tapOpen === i ? 'active' : ''}`}><img src="./imgs/ic-right.svg" /></p>
                                                <p className='tap-name'>💥 개발 이슈</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <div className='inside'>
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
                                        <div className='title'>
                                            <div>
                                                <p className={`right-icon ${tapOpen === i ? 'active' : ''}`}><img src="./imgs/ic-right.svg" /></p>
                                                <p className='tap-name'>💭 개발 후 느낀점</p>
                                            </div>
                                            <p>U</p>
                                        </div>

                                        <p className='inside'>{item.think}</p>
                                    </div>
                                </div>
                            }
                        </div>
                    ))}

                    {/* <div className='onetap' onClick={() => { }}>
                        <div className='parent'>
                            <div className='name'>
                                <p className='right-icon'><img src="./imgs/ic-right.svg" /></p>
                                <p>SCREEN</p>
                            </div>
                            <p><img src="./imgs/ic-editDot.svg" /></p>
                        </div>
                        {
                            <div className={`sub ${tapOpen ? 'top-open' : 'top-close'}`}>
                                <div className='thumb'>
                                    <div className='title'>
                                        <div>
                                            <p className='right-icon'><img src="./imgs/ic-right.svg" /></p>
                                            <p>🎨 대표 이미지</p>
                                        </div>
                                        <p>U</p>
                                    </div>

                                    <p className='inside'><img className='thumb-img' src="./imgs/img-SCREEN.jpg" /></p>
                                </div>

                                <div className='intro'>
                                    <div className='title'>
                                        <div>
                                            <p className='right-icon'><img src="./imgs/ic-right.svg" /></p>
                                            <p>✨ 소개</p>
                                        </div>
                                        <p>U</p>
                                    </div>

                                    <p className='inside'>
                                        이 프로젝트는 TMDB API를 기반으로 영화와 TV 콘텐츠 정보를 탐색할 수 있는 웹 서비스입니다.<br />
                                        사용자는 최신 인기 작품, 추천 콘텐츠, 배우 필모그래피 등을 확인하고 다양한 OTT 플랫폼에서 제공되는 작품 정보를 쉽게 찾아볼 수 있습니다.<br />
                                        직관적인 UI와 인터랙션을 통해 콘텐츠를 탐색하는 재미를 제공하며, 검색 기능과 필터링을 통해 원하는 영화와 TV 프로그램을 빠르게 발견할 수 있습니다. 또한 가로 슬라이드, 팝업 상세 정보 등 다양한 UI 요소를 활용하여 사용자 경험을 향상시키는 것을 목표로 합니다.
                                    </p>
                                </div>

                                <div className='url'>
                                    <div className='title'>
                                        <div>
                                            <p className='right-icon'><img src="./imgs/ic-right.svg" /></p>
                                            <p>🔗 배포 URL</p>
                                        </div>
                                        <p>U</p>
                                    </div>

                                    <a className='inside link' href="https://dl-xogus.github.io/screen/" target='_black'>https://dl-xogus.github.io/screen/</a>
                                </div>

                                <div className='github'>
                                    <div className='title'>
                                        <div>
                                            <p className='right-icon'><img src="./imgs/ic-right.svg" /></p>
                                            <p>GitHub</p>
                                        </div>
                                        <p>U</p>
                                    </div>

                                    <a className='inside link' href="https://github.com/dl-xogus/screen" target='_black'>https://github.com/dl-xogus/screen</a>
                                </div>

                                <div className='period'>
                                    <div className='title'>
                                        <div>
                                            <p className='right-icon'><img src="./imgs/ic-right.svg" /></p>
                                            <p>⏱️ 개발 기간</p>
                                        </div>
                                        <p>U</p>
                                    </div>

                                    <p className='inside'>2026.01.31 ~ 2026.03.09</p>
                                </div>

                                <div className='team'>
                                    <div className='title'>
                                        <div>
                                            <p className='right-icon'><img src="./imgs/ic-right.svg" /></p>
                                            <p>👥 구성원</p>
                                        </div>
                                        <p>U</p>
                                    </div>

                                    <p className='inside'>팀 프로젝트 (3명)</p>
                                </div>

                                <div className='contri'>
                                    <div className='title'>
                                        <div>
                                            <p className='right-icon'><img src="./imgs/ic-right.svg" /></p>
                                            <p>📌 기여도</p>
                                        </div>
                                        <p>U</p>
                                    </div>

                                    <p className='inside'>
                                        개발: %<br />
                                        디자인: %<br />
                                        기획: %
                                    </p>
                                </div>

                                <div className='stack'>
                                    <div className='title'>
                                        <div>
                                            <p className='right-icon'><img src="./imgs/ic-right.svg" /></p>
                                            <p>🛠️ 사용된 기술 스택</p>
                                        </div>
                                        <p>U</p>
                                    </div>

                                    <div className='inside'>
                                        <div>
                                            <p className='img-wrap'><img src="./imgs/ic-html.svg" /></p>
                                            <p>HTML5</p>
                                        </div>
                                        <div>
                                            <p className='img-wrap'><img src="./imgs/ic-css.svg" /></p>
                                            <p>CSS3</p>
                                        </div>
                                        <div>
                                            <p className='img-wrap'><img src="./imgs/ic-javascript.svg" /></p>
                                            <p>Javascript</p>
                                        </div>
                                        <div>
                                            <p className='img-wrap'><img src="./imgs/ic-jquery.svg" /></p>
                                            <p>jQuery</p>
                                        </div>
                                        <div>
                                            <p className='img-wrap'><img src="./imgs/ic-github.svg" /></p>
                                            <p>GitHub</p>
                                        </div>
                                        <div>
                                            <p className='img-wrap'><img src="./imgs/ic-git.svg" /></p>
                                            <p>Git</p>
                                        </div>
                                        <div>
                                            <p className='img-wrap'><img src="./imgs/ic-tmdb.svg" /></p>
                                            <p>TMDB API</p>
                                        </div>
                                        <div>
                                            <p className='img-wrap'><img src="./imgs/ic-figma.svg" /></p>
                                            <p>Figma</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='func'>
                                    <div className='title'>
                                        <div>
                                            <p className='right-icon'><img src="./imgs/ic-right.svg" /></p>
                                            <p>⚡ 주요 기능</p>
                                        </div>
                                        <p>U</p>
                                    </div>

                                    <div className='inside'>
                                        <div>
                                            <p>1. 콘텐츠 탐색</p>
                                            <p className='text'>영화 및 TV 프로그램 검색 및 결과 제공</p>
                                        </div>
                                        <div>
                                            <p>2. 콘텐츠 정보 확인</p>
                                            <p className='text'>줄거리, 평점, 장르, 개봉일, 출연 배우 등 상세 정보 확인</p>
                                        </div>
                                        <div>
                                            <p>3. 인물 정보</p>
                                            <p className='text'>인물 상세 페이지 및 필모그래피 제공</p>
                                        </div>
                                        <div>
                                            <p>4. 콘텐츠 추천</p>
                                            <p className='text'>인기 콘텐츠, 추천 콘텐츠, 최신순 정렬 제공</p>
                                        </div>
                                        <div>
                                            <p>5. OTT 제공 정보</p>
                                            <p className='text'>Netflix, Apple TV, Disney+, TVING, wavve 등 시청 가능 플랫폼 확인</p>
                                        </div>
                                        <div>
                                            <p>6. 인터렉션 UI</p>
                                            <p className='text'>가로 슬라이드 리스트, 드래그 스크롤, 상세 정보 팝업, 검색 UI 인터랙션</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='issue'>
                                    <div className='title'>
                                        <div>
                                            <p className='right-icon'><img src="./imgs/ic-right.svg" /></p>
                                            <p>💥 개발 이슈</p>
                                        </div>
                                        <p>U</p>
                                    </div>

                                    <div className='inside'>
                                        <div>
                                            <div className='is'>
                                                <p className='red'>이슈</p>
                                                <p className='text'>TMDB API에서 배우의 필모그래피 데이터를 가져올 때 영화와 TV콘텐츠가 서로 다른 날짜 속성을 사용하고 있어 정렬이 정상적으로 동작하지 않는 문제가 발생하였습니다.</p>
                                            </div>
                                            <div className='is'>
                                                <p className='blue'><span>└</span> 해결</p>
                                                <p className='text'>두 속성 중 존재하는 값을 선택하도록<span>(release_date || first_credit_air_date)</span> 조건을 설정한 뒤 최신순 정렬하였습니다.</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='is'>
                                                <p className='red'>이슈</p>
                                                <p className='text'>콘텐츠의 OTT제공 플랫폼을 표시할 때 TMDB API의 watch provider 데이터가 flatrate, rent, buy 세 가지 카테고리로 나누어 제공되어 동일한 OTT 서비스가 여러 카테고리에 동시에 포함되어 있어 여러번 출력는 문제 발생</p>
                                            </div>
                                            <div className='is'>
                                                <p className='blue'><span>└</span> 해결</p>
                                                <p className='text'>flatrate, rent, buy의 데이터를 하나의 배열로 합친 뒤 provider_id 기준으로 중복을 제거하여 동일한 OTT 플랫폼은 한 번만 출력하도록 처리 하였습니다.</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='is'>
                                                <p className='red'>이슈</p>
                                                <p className='text'>메인 페이지 콘텐츠 영역에서 드래그 가능한 UI를 구현하는 과정에서 마우스를 이동할 때 커서 상태가 계속 변경되어 깜빡이는 문제가 발생하였습니다.</p>
                                            </div>
                                            <div className='is'>
                                                <p className='blue'><span>└</span> 해결</p>
                                                <p className='text'>mouseover 이벤트가 부모 요소뿐 아니라 내부의 모든 자식 요소에서도 반복적으로 발생했기 때문에 이벤트가 과도하게 실행되었는데 <span>closest()</span> 매서드를 활용하여 실제 드래그 영역에 해당하는 요소에서만 이벤트가 실행 되도록 조건을 추가하였습니다.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='think'>
                                    <div className='title'>
                                        <div>
                                            <p className='right-icon'><img src="./imgs/ic-right.svg" /></p>
                                            <p>💭 개발 후 느낀점</p>
                                        </div>
                                        <p>U</p>
                                    </div>

                                    <p className='inside'>
                                        TMDB API를 활용해 영화 데이터를 받아와 동적으로 렌더링하는 웹페이지를 구현하였습니다.<br />
                                        API 응답 데이터 구조를 분석하고 필요한 데이터를 가공하는 과정에서 데이터 처리와 디버깅 능력을 향상시켰으며, JavaScript를 이용한 DOM 조작과 사용자 인터랙션 처리 방식을 익혔습니다.
                                    </p>
                                </div>
                            </div>
                        }
                    </div> */}















                </div>
            </div>
        </div>
    )
}

export default ProjectsDetails