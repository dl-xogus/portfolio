import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from 'react';
import '../css/ProblemSolving.scss'

function ProblemSolving() {
  const [open, setOpen] = useState(null);

  const codes = {
    code1: `const providers = [
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
});`,
    code2: `useEffect(() => {
  const sections = document.querySelectorAll(".part");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);`,
    code3: `/* 케이스 A - 코드블록 감싸기: */
\`{"summary": "...", "advice": "..."}\`

/* 케이스 B - 앞뒤 설명 텍스트 포함: */
\`아래는 요청하신 분석 결과입니다.
{"summary": "...", "advice": "..."}
이상입니다.\`

/* 케이스 C - 두 가지 혼합: */
\`물론입니다!
{"summary": "...", "advice": "..."}\``,
    code4: `const text = result.response.text().replace(/\`\`\`json|\`\`\`/g, '').trim();
const jsonMatch = text.match(/\{(?:[^{}]|{[^{}]*})*\}/);`
  };

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
            {codes.code1}
          </SyntaxHighlighter>
        </div>
      ),
      결과: (
        <p>
          이 문제를 해결하는 과정에서 API 데이터 구조를 정확히 이해하는 것이 중요하다는 것을 느꼈습니다.<br />
          또한 단순히 데이터를 출력하는 것이 아니라 데이터의 중복 여부와 구조를 고려한 전처리 과정이 필요하다는 점을 경험할 수 있었습니다.
        </p>
      )
    },
    {
      title: "\"스크롤 위치에 따라 현재 섹션이 정확히 변경되지 않는 문제\"",
      문제상황: (
        <p>포트폴리오의 네비게이션 active 상태가 사용자가 보는 섹션과 맞지 않는 현상이 발생했습니다.</p>
      ),
      원인분석: (
        <div>
          <p>초기 구현 방식은 브라우저의 scroll 이벤트가 발생할 때마다 현재 스크롤 위치를 기준으로 모든 섹션의 위치를 반복 계산하는 구조였습니다.</p>
          <p>이 방식은 다음과 같은 한계가 있었습니다.</p>
          <ul>
            <li>스크롤이 발생하는 동안 이벤트가 매우 자주 실행됨</li>
            <li>매번 DOM 위치를 계산해야 하므로 성능 부담 발생</li>
            <li>브라우저가 실제로 어떤 섹션을 보고 있는지 정확하게 판단하기 어려움</li>
            <li>화면 크기나 스크롤 속도에 따라 결과가 달라질 수 있음</li>
          </ul>
          <p>즉, 직접 계산 기반 방식은 구현은 단순했지만 정확성과 성능 측면에서 비효율적이었습니다.</p>
        </div>
      ),
      해결방법: (
        <div>
          <p>문제를 해결하기 위해 브라우저 API인 IntersectionObserver를 활용하는 방식으로 구조를 변경했습니다.</p>
          <p>IntersectionObserver는 특정 요소가 화면(Viewport)에 얼마나 노출되었는지를 브라우저가 직접 감지해주는 기능입니다.</p>
          <p>이를 활용하면 별도의 스크롤 위치 계산 없이 현재 화면에 표시되고 있는 섹션을 효율적으로 감지할 수 있습니다.</p>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {codes.code2}
          </SyntaxHighlighter>
          <p>추가적으로 threshold: 0.5 옵션을 적용하여 요소가 화면에 50% 이상 보일 때만 active 상태가 변경되도록 설정했습니다.</p>
          <p>이를 통해:</p>
          <ul>
            <li>섹션 경계에서 active 상태가 흔들리는 현상 방지</li>
            <li>사용자가 실제로 보고 있는 영역 기준으로 상태 변경</li>
            <li>불필요한 이벤트 연산 감소</li>
          </ul>
          <p>효과를 얻을 수 있었습니다.</p>
        </div>
      ),
      결과: (
        <div>
          <p>IntersectionObserver를 적용한 이후 현재 보고 있는 섹션이 보다 정확하게 표시되었고, 빠른 스크롤 상황에서도 안정적으로 동작하게 되었습니다.</p>
          <p>또한 불필요한 스크롤 이벤트 연산이 줄어들며 성능과 사용자 경험을 함께 개선할 수 있었고, 브라우저에서 제공하는 최적화된 API를 활용하는 중요성을 배울 수 있었습니다.</p>
        </div>
      )
    },
    {
      title: "\"Gemma가 JSON을 코드블록으로 감싸서 반환하는 문제\"",
      문제상황: (
        <div>
          <p>
            프롬프트에 "반드시 아래 JSON 형식으로만 응답하세요. 다른 텍스트 없이"라고 명시했음에도 Gemma 응답이 다음 세 가지 형태 중 하나로 오는 경우가 있었습니다.
          </p>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {codes.code3}
          </SyntaxHighlighter>
          <p>세 케이스 모두 JSON.parse()를 바로 호출하면 SyntaxError가 발생합니다.</p>
        </div>
      ),
      원인분석: (
        <div>
          <p>OpenAI GPT 계열은 response_format: {'{'}type: "json_object" {'}'} 옵션으로 JSON만 강제 출력이 가능하지만, Google Gemini API의 Gemma 모델은 이 옵션을 지원하지 않았습니다.</p>
          <p>Gemma는 instruction-tuned 모델 특성상 "도움이 되려는" 경향이 강해서 프롬프트 지시를 무시하고 마크다운 포맷이나 설명 문장을 붙이는 경우가 빈번하게 발생 하였습니다.</p>
        </div>
      ),
      해결방법: (
        <div>
          <p>코드블록 제거 후 정규식으로 JSON 객체만 추출하는 방식으로 변경하였습니다.</p>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {codes.code4}
          </SyntaxHighlighter>
        </div>
      ),
      결과: (
        <div>
          <p>코드블록 제거 + 정규식 추출 + 3회 재시도 조합으로 파싱 실패 에러를 해결했습니다.</p>
          <p>AI 모델마다 JSON 출력 제어 방식이 다르기 때문에 모델 선택 시 구조화된 출력 지원 여부를 먼저 확인해야 한다는 것을 배웠고, 프롬프트로 형식을 강제해도 모델이 어길 수 있으므로, AI 응답은 항상 정제 후 파싱하는 방어적 설계가 필요하다는 것을 배웠습니다.</p>
        </div>
      )
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