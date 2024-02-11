import React, { useEffect, useState } from 'react';

//Images
import html5 from '../assets/html.png';
import css3 from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/reactjs.png';

//CSS File
import './styles.css';

const Home = () => {

    const [isAnimationStop, setIsAnimationStop] = useState(Array(17).fill(false));

    const [isTvOff, setIsTvOff] = useState(false);

    const [isMobileButtonClick, setIsMobileButtonClick] = useState(false);

    const [activeIcons, setActiveIcons] = useState([false, false, false, false]);

    const [isTvLegsCollapsed, setIsTvLegsCollapsed] = useState(false);

    const [isPlayButtonClick, setIsPlayButtonClick] = useState(false);

    const [isPlayButtonActive, setIsPlayButtonActive] = useState(false);

    const [switchTheme, setSwitchTheme] = useState(false);

    const helloWorldText = "HELLOWORLD!".split('');

    const frontendDeveloper = "FRONTENDDEVELOPER".split('');

    const handleTelevisionPower = () => {
        setIsTvOff((prevTvOff) => !prevTvOff);
        setIsPlayButtonClick(false);
        setSwitchTheme(false);
    };

    const handleIconClick = (index) => {

        if (index === 0) {
            const updatedIcons = [true, false, false, false];
            setActiveIcons(updatedIcons);
            setIsPlayButtonActive(false);
        } else {
            const updatedIcons = [...activeIcons];
            updatedIcons[index] = !updatedIcons[index];
            setActiveIcons(updatedIcons);
        };

    };

    const handleTvLegs = () => {
        setIsTvLegsCollapsed(prevState => !prevState);
    };

    const handlePlayButton = () => {

        if (!isPlayButtonClick && isTvOff) {
            setIsPlayButtonClick(true);
            setIsTvOff(true);
            setIsPlayButtonActive(true);
        } else {
            setIsPlayButtonClick(true);
        };

    };

    const handleTelevisionTheme = () => {

        if (!switchTheme && isTvOff) {
            setSwitchTheme(true);
            setIsTvOff(true);
        } else {
            setSwitchTheme(false);
        };

    };

    const handleMobileButton = () => {
        setIsMobileButtonClick((prevIsMobileButtonClick) => !prevIsMobileButtonClick);
    };

    return (

        <div className='home-content'>

            <div className="animated-balls-container">

                {Array.from({ length: 17 }, (_, i) => (

                    <div
                        key={i}
                        className={`animated-ball-${i + 1}`}
                    >
                        {frontendDeveloper[i]}
                    </div>

                ))}

            </div>

            <div className="hello-world">

                {helloWorldText.map((letter, index) => (
                    <span className={`letter-${index + 1}`} key={index}>{letter}</span>
                ))}

            </div>

            <div className="introduction">

                <div className="tv-container">

                    <div className={isTvOff ? 'television-indicator on' : 'television-indicator off'} />

                    <div className={isTvOff && !isPlayButtonClick ? "television open bg-change" : "television off"}>

                        <button className={isTvOff && !isPlayButtonClick ? "play-btn appear" : "play-btn disappear"}>
                            <i className={isTvOff && isPlayButtonClick ? 'bi bi-pause-fill' : 'bi bi-play-fill'} />
                        </button>

                        <button className={isTvOff && !isPlayButtonClick ? "swipe-up-btn appear" : "swipe-up-btn disappear"}>
                            <i className={isTvOff && isPlayButtonClick ? 'bi bi-chevron-double-up' : 'bi bi-chevron-double-up'} />
                        </button>

                        <div className="television-front" />
                        <div className="television-topIn" />
                        <div className="television-topOut" />
                        <div className="television-bottomIn" />
                        <div className="television-bottomOut" onClick={handleMobileButton} />
                        <div className="television-leftIn" />
                        <div className="television-leftOut" />
                        <div className="television-rightIn" />
                        <div className="television-rightOut" />

                        <div
                            className=
                            {`my-picture ${switchTheme ? 'switch-theme' : ''} 
                ${isTvOff && isPlayButtonClick ? 'appear' : 'disappear'}`}
                        />

                        <div
                            className=
                            {`about ${switchTheme ? 'switch-theme' : ''} 
                ${isTvOff && isPlayButtonClick ? 'appear' : 'disappear'}`}
                        >

                            <h2
                                className=
                                {`field-text ${switchTheme ? 'switch-theme' : ''} 
                ${isTvOff && isPlayButtonClick ? 'appear' : 'disappear'}`}
                            >
                                FRONTEND DEVELOPER
                            </h2>

                            <h3
                                className=
                                {`name-text ${switchTheme ? 'switch-theme' : ''} 
                ${isTvOff && isPlayButtonClick ? 'appear' : 'disappear'}`}
                            >
                                TAYYAB ALI
                            </h3>

                            <div className="languages">

                                <span
                                    className=
                                    {`${switchTheme ? 'switch-theme' : ''} 
                ${isTvOff && isPlayButtonClick ? 'appear' : 'disappear'}`}
                                >
                                    <img
                                        className={isTvOff && isPlayButtonClick ? "appear" : "disappear"}
                                        src={html5} alt="HTML5"
                                    />
                                </span>

                                <span
                                    className=
                                    {`${switchTheme ? 'switch-theme' : ''} 
                ${isTvOff && isPlayButtonClick ? 'appear' : 'disappear'}`}
                                >
                                    <img
                                        className={isTvOff && isPlayButtonClick ? "appear" : "disappear"}
                                        src={css3} alt="CSS3"
                                    />
                                </span>

                                <span
                                    className=
                                    {`${switchTheme ? 'switch-theme' : ''} 
                ${isTvOff && isPlayButtonClick ? 'appear' : 'disappear'}`}
                                >
                                    <img
                                        className={isTvOff && isPlayButtonClick ? "appear" : "disappear"}
                                        src={javascript} alt='JAVASCRIPT'
                                    />
                                </span>

                                <span
                                    className=
                                    {`${switchTheme ? 'switch-theme' : ''} 
                ${isTvOff && isPlayButtonClick ? 'appear' : 'disappear'}`}
                                >
                                    <img
                                        className={isTvOff && isPlayButtonClick ? "appear" : "disappear"}
                                        src={react} alt="REACT"
                                    />
                                </span>

                            </div>

                        </div>

                    </div>

                    <div
                        className={isTvLegsCollapsed ? "television-leg collapsed" : "television-leg expand"}
                    />
                    <div
                        className={isTvLegsCollapsed ? "television-step collapsed" : "television-step expand"}
                    />

                </div>

                <div className={isMobileButtonClick ? "tv-remote-container expand" : "tv-remote-container"}>

                    <div className={isTvOff ? 'remote-indicator on' : 'remote-indicator off'} />

                    <div className="tv-remote-buttons">

                        <button type='button' className='tv-remote-button' onClick={handleTelevisionPower}>

                            <i
                                className={
                                    isTvOff && activeIcons[0] ? 'bi bi-power active' : 'bi bi-power not-active'
                                }
                                onClick={() => handleIconClick(0)} />

                            <i
                                className={
                                    isTvOff && activeIcons[0] ? 'bi bi-phone active' : 'bi bi-phone not-active'
                                }
                                onClick={() => handleIconClick(0)} />

                        </button>

                        <button
                            disabled={!isTvOff}
                            type='button'
                            className='tv-remote-button'
                            onClick={handlePlayButton}
                        >

                            <i
                                className={isPlayButtonActive
                                    ? "bi bi-play-fill active" :
                                    "bi bi-play-fill not-active"}
                                onClick={() => handleIconClick(1)}
                            />

                            <i
                                className={isPlayButtonActive
                                    ? "bi bi-chevron-double-up active" :
                                    "bi bi-chevron-double-up not-active"}
                                onClick={() => handleIconClick(1)}
                            />

                        </button>

                        <button
                            type='button'
                            className={switchTheme ? 'tv-remote-button switch-theme-button switch-theme'
                                : 'tv-remote-button switch-theme-button'}
                            onClick={handleTelevisionTheme} />

                        <button type='button' className='tv-remote-button'>

                            <i
                                className={isTvLegsCollapsed && activeIcons
                                    ? "bi bi-display tv-leg-collapse active" :
                                    "bi bi-tv not-active"}
                                onClick={handleTvLegs} />

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Home;