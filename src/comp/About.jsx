import '../css/About.scss'

function About() {
  return (
    <section id='about' className='part'>
      <div className='about'>
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
              <b>About me</b>
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
              <div className='tagAndDetail'>
                <div className='tag-line'>
                  <p className='tag top-tag'>
                    <span>{'<'}<span className='angle'>p</span>{'>'}</span>
                  </p>

                  <p className='tag bot-tag'>
                    <span>{'</'}<span className='angle'>p</span>{'>'}</span>
                  </p>
                </div>

                <p className='text'>
                  저는 개발을 하면서 마주치는 문제를 단순히 해결하는 데서 끝내지 않고,<br />
                  왜 그런 문제가 발생했는지를 끝까지 <b className='point'>이해하려고 노력하는 개발자</b>입니다.<br /><br />
                  <b className='point'>React.js</b>와 <b className='point'>Next.js</b>를 사용한 프로젝트를 진행하며 다양한 에러와 구조적인 문제를 경험했고,<br />
                  그 과정에서 <b className='point'>원인을 분석하고 해결하는 경험</b>을 꾸준히 쌓아왔습니다.<br /><br />
                  특히 에러를 해결하는 과정에서 얻은 지식을 기록하고, 같은 문제가 <b className='point'>다시 발생하지 않도록</b> 하는 것을 중요하게 생각합니다.<br /><br />
                  앞으로도 단순히 기능을 구현하는 개발자가 아니라,<br />
                  <b className='point'>문제를 정의하고 해결할 수 있는 개발자</b>로 성장하는 것을 목표로 하고 있습니다.
                </p>
              </div>

              <div className='tagAndDetail'>
                <div className='tag-line'>
                  <p className='tag top-tag'>
                    <span>{'<'}<span className='angle'>p</span>{'>'}</span>
                  </p>
                  <p className='tag bot-tag'>
                    <span>{'</'}<span className='angle'>p</span>{'>'}</span>
                  </p>
                </div>

                <div className='text'>
                  <p className='note'>{'<!-- 문제 집요하게 파는 스타일 -->'}</p>
                  에러가 발생했을 때 단순히 해결 방법을 적용하는 것이 아니라, <b className='point'>왜 발생했는지</b> 원인을 이해할 때까지 분석합니다.<br /><br />
                  <p className='note'>{'<!-- 실제 경험 기반 성장 -->'}</p>
                  프로젝트를 진행하며 다양한 문제를 직접 겪고 해결하면서, <b className='point'>문제 해결 경험</b>을 쌓아왔습니다.<br /><br />
                  <p className='note'>{'<!-- 구조를 이해하려는 습관 -->'}</p>
                  단순 구현에 그치지 않고, 상태 관리나 API 흐름 등 <b className='point'>전체 구조를 이해</b>하려고 노력합니다.<br /><br />
                  <p className='note'>{'<!-- 기록하는 개발자 -->'}</p>
                  문제 해결 과정을 정리하고 기록하여, <b className='point'>같은 문제를 반복하지 않고</b> 더 빠르게 해결할 수 있도록 합니다.
                </div>
              </div>
            </section>
          </div>
        </article>

      </div>
      <div className='section-line'></div>
    </section>
  )
}

export default About