import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from 'react';
import '../css/ProblemSolving.scss'

function ProblemSolving() {
  const [open, setOpen] = useState(null);

  const code1 = `const providers = [
  ...(kr?.flatrate || []),
  ...(kr?.rent || []),
  ...(kr?.buy || [])
];

const myOTT = [8, 350, 1883, 356, 337];
const printedOTT = new Set();

providers.forEach((p) => {
  if (myOTT.includes(p.provider_id) && !printedOTT.has(p.provider_id)) {
    printedOTT.add(p.provider_id);
    ottLogoOutput += \`<img src="\${img_path_logo + p.logo_path}">\`;
  }
});
`;

  const items = [
    {
      title: "\"OTT 플랫폼 아이콘 중복 출력 문제 해결\"",
      문제상황: (
        <p>콘텐츠의 OTT 제공 플랫폼을 표시하는 기능을 구현하는 과정에서 OTT 플랫폼 아이콘이 여러 번 출력되는 문제가 발생하였습니다.</p>
      ),
      원인분석: (
        <div>
          <p>TMDB API의 watch provider 데이터는 다음과 같이 세 가지 카테고리로 나누어 제공됩니다.</p>
          <ul>
            <li>flatrate (구독 서비스)</li>
            <li>rent (대여)</li>
            <li>buy (구매)</li>
          </ul>
          <p>
            문제는 동일한 OTT 서비스가 여러 카테고리에 동시에 포함될 수 있다는 점이였습니다.<br />
            예를 들어 Netflix가 flatrate와 buy에 동시에 존재할 경우, 플랫폼 아이콘이 중복으로 렌더링되는 문제가 발생합니다.
          </p>
        </div>
      ),
      해결방법: (
        <div>
          <p>세 카테고리 배열을 하나로 합친 뒤 provider_id를 기준으로 중복을 제거하여 동일한 플랫폼이 한 번만 출력되도록 처리해 문제를 해결했습니다.</p><br />
          <p>예시 로직</p>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {code1}
          </SyntaxHighlighter>
        </div>
      ),
      결과: (
        <p>
          이 문제를 해결하는 과정에서 API 데이터 구조를 정확히 이해하는 것이 중요하다는 것을 느꼈습니다.<br />
          또한 단순히 데이터를 출력하는 것이 아니라 데이터의 중복 여부와 구조를 고려한 전처리 과정이 필요하다는 점을 경험할 수 있었습니다.
        </p>
      ),
    },
    {
      title: "\"프로젝트2\"",
      문제상황: (''),
      원인분석: (''),
      해결방법: (''),
      결과: (''),
    },
    {
      title: "\"프로젝트3\"",
      문제상황: (''),
      원인분석: (''),
      해결방법: (''),
      결과: (''),
    },
  ];


  return (
    <section id='problem' className="part">
      <div className='problem'>
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
              <b>Problem Solving</b>
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

            <section className="problem-section">
              {items.map((obj, i) => (
                <div className='tagAndDetail problem-obj' key={i}>
                  <div className='tag-line'>
                    <p className={`tag top-tag att-tag ${open === i ? 'active' : ''}`} onClick={() => setOpen(open === i ? null : i)}>
                      <span>
                        {'<'}
                        <span className='angle'>
                          div
                          <span className='att'>
                            {' name'}
                            <span className='nomal'>
                              =
                              <b className='orange problem-name'>
                                {obj.title}
                              </b>
                            </span>
                          </span>
                        </span>
                        {'>'}
                      </span>
                    </p>

                    <p className='tag bot-tag'>
                      <span>{'</'}<span className='angle'>div</span>{'>'}</span>
                    </p>
                  </div>

                  <div className={`ps ${open === i ? 'open' : 'close'}`}>
                    <div className="text">
                      <div>
                        <p className='note'>{'<!-- 문제 상황 -->'}</p>
                        {obj.문제상황}
                      </div>

                      <div>
                        <p className='note'>{'<!-- 원인 분석 -->'}</p>
                        {obj.원인분석}
                      </div>

                      <div>
                        <p className='note'>{'<!-- 해결 방법 -->'}</p>
                        {obj.해결방법}
                      </div>

                      <div>
                        <p className='note'>{'<!-- 결과 및 배운 점 -->'}</p>
                        {obj.결과}
                      </div>
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

export default ProblemSolving