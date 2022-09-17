import { Typewriter } from "react-simple-typewriter";

import './MainPage.css';

function MainPage() {
    return <div className="main-page">
        <p className="main-page-text">
            <Typewriter
                words={["Hello, I'm Albertino Vieira", "I'm a full-stack web developer "]}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                delaySpeed={1000}
            />
        </p>
        <button className="check-my-work-btn">Check my work</button>
        <div>social .....</div>
    </div>
}

export default MainPage;