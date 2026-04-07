import '../css/Contact.scss'

function Contact() {
    return (
        <section id='contact' className='part'>
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
                            <b>Contact me</b>
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

                        <section className='contact-section'>
                            <p>터미널을 열어 저에게 연락해보세요 (ctrl + j)</p>
                            <button className='terOpenBtn'>OPEN</button>
                        </section>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Contact