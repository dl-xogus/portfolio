import { useState, useRef, useEffect } from "react";
import "../css/Terminal.scss";

function Terminal({ setShowTerminal }) {
    const [bool, setBool] = useState(false);
    const [cmd, setCmd] = useState("");
    const [messages, setMessages] = useState([]);
    const scrollRef = useRef(null);
    const inputRef = useRef(null);

    const commands = {
        help: (
            <div className="help">
                <p>Available commands:</p>
                <div className="commands">
                    <div>
                        <p>info</p>
                        <p>phone</p>
                        <p>email</p>
                        <p>github</p>
                        <p>contact</p>
                        <p>clear</p>
                    </div>
                    <div>
                        <p>- Basic information</p>
                        <p>- Show phone number</p>
                        <p>- Show email address</p>
                        <p>- Show GitHub address</p>
                        <p>- Show all contact information</p>
                        <p>- Clear terminal</p>
                    </div>
                </div>
            </div>
        ),

        info: (
            <div className="info">
                <p>Name : Lee Taehyeon</p>
                <p>Role : Frontend Developer</p>
                <p>Birth : 1999.12.28</p>
            </div>
        ),

        phone: (
            <div className="phone">
                <p>Phone : 010-8729-0576</p>
                <p>Feel free to contact me anytime.</p>
            </div>
        ),

        email: (
            <div className="email">
                Email : aaayoo12345@gmail.com
            </div>
        ),

        github: (
            <div className="github">
                <div>
                    <span>GitHub : </span>
                    <a className="ter-link" href="https://github.com/dl-xogus" target="_blank">https://github.com/dl-xogus</a>
                </div>
            </div>
        ),

        contact: (
            <div className="help">
                <p>Contact Information</p>
                <div className="commands">
                    <div>
                        <p>Name</p>
                        <p>Phone</p>
                        <p>Email</p>
                        <p>GitHub</p>
                    </div>
                    <div>
                        <p>: Lee Taehyeon</p>
                        <p>: 010-8729-0576</p>
                        <p>: aaayoo12345@gmail.com</p>
                        <p>: <a className="ter-link" href="https://github.com/dl-xogus" target="_blank">https://github.com/dl-xogus</a></p>
                    </div>
                </div>
            </div>
        )
    };

    const terminal = (e) => {
        e.preventDefault();

        const command = cmd.trim().toLowerCase();

        if (command === "clear") {
            setMessages([]);
            setCmd("");
            setBool(false)
            return;
        }

        const result = commands[command] || (
            <p>Command not found: {command}</p>
        );

        setMessages((prev) => [
            ...prev,
            {
                command,
                result
            }
        ]);

        setCmd("");
    };

    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages]);

    return (
        <div className="terminal">
            <div className='ter-topbar'>
                <p className='ter-tab'>TERMINAL for contact</p>
                <div className='ter-icons'>
                    <div>
                        <div className='powershell'>
                            <p><img src="./imgs/ic-terminal.svg" /></p>
                            <p>powershell</p>
                        </div>
                    </div>

                    <div className='ter-endIcs'>
                        <p className="btn" onClick={() => setShowTerminal(false)}><img src="./imgs/ic-x.svg" /></p>
                    </div>
                </div>
            </div>

            <div className="ter-inner" ref={scrollRef}>

                <div className="ter-msg">
                    {messages.map((msg, i) => (
                        <div key={i}>
                            <p className='before-cmd'>PS C:\portfolio\taehyeon{'>'} <span className='yellow'>{msg.command}</span></p>
                            {msg.result}
                        </div>
                    ))}
                </div>

                <div className="ter-input">
                    <p>PS C:\portfolio\taehyeon{'>'}</p>

                    <form onSubmit={terminal} onClick={() => { setBool(true); inputRef.current.focus(); }}>
                        <span className='fake-Placeholder'
                            draggable="false"
                            style={{ display: bool ? 'none' : 'block' }}
                        >
                            Welcome to Taehyeon's terminal. <span>Type 'help' to see available commands.</span>
                        </span>
                        <input
                            ref={inputRef}
                            value={cmd}
                            onChange={(e) => { setCmd(e.target.value); setBool(true); if (e.target.value == '') setBool(false); }}
                            autoFocus
                        />
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Terminal;