import TypeIt from 'typeit-react'
import '../css/Hero.scss'

function Hero() {
  return (
    <section className='part' id='home'>
      <div className='hero'>
        <article className='details hero-details'>
          <div className='tagAndDetail hero-h1'>
            <div className='tag-line'>
              <p className='tag top-tag'>
                <span>{'<'}<span className='angle'>h1</span>{'>'}</span>
              </p>

              <p className='tag bot-tag'>
                <span>{'</'}<span className='angle'>h1</span>{'>'}</span>
              </p>
            </div>

            <div className='title'>
              <TypeIt
                speed={10}
                getBeforeInit={(instance) => {
                  instance
                    .options({ speed: 30 })
                    .type("<span>문제를 끝까지 파고들어 해결하는</span>", { html: true })
                    .break()
                    .pause(500)
                    .type("<b>개발자 </b>", { html: true })
                    .type('<b class="point">이태현 </b>', { html: true })
                    .type("<b>입니다</b>", { html: true })
                    .go();

                  return instance;
                }}
              />
            </div>
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

            <p>단순한 구현을 넘어, 원인을 분석하고 해결하는 것을 중요하게 생각합니다.</p>
          </div>
        </article>

      </div>
      <div className='section-line'></div>
    </section>
  )
}

export default Hero