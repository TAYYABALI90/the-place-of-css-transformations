import React, { useState } from 'react';

//Languages Pictures
import html5 from '../assets/html.png';
import css3 from '../assets/css.png';
import javascript from '../assets/javascript.png';
import bootstrap from '../assets/bootstrap.png';
import mongoDB from '../assets/mongodb.png';
import expressJS from '../assets/expressjs.png';
import reactJS from '../assets/reactjs.png';
import nodeJS from '../assets/nodejs.png';

// import myCarDoorLock from '../assets/car-door-lock.png';

//CSS File
import './styles.css';

const About = () => {

    const [isTransformedButtonClick, setIsTransformedButtonClick] = useState(false);

    const [isWindowButtonClick, setIsWindowButtonClick] = useState(false);

    const [isGasCapButtonClick, setIsGasCapButtonClick] = useState(false);

    const [isDoorLockButtonClick, setIsDoorLockButtonClick] = useState(false);

    const [isAboutMeEntranceButtonClick, setIsAboutMeEntranceButtonClick] = useState(false);

    const [isEntranceOfAboutMeCleared, setIsEntranceOfAboutMeCleared] = useState(false);

    const [isIndicatorButtonClick, setIsIndicatorButtonClick] = useState(false);

    const hoverDirections = 'hover-directions';

    const keyOfAboutMe = 'key-of-about-me';

    const loadingLightOfLock0fEntranceOfAboutMe = 'loading-light-of-button-for-the-entrance-of-about-me';

    const handleTransformedButtonClick = () => setIsTransformedButtonClick(prevState => !prevState);

    const handleWindowButtonClick = () => setIsWindowButtonClick(prevState => !prevState);

    const handleGasCapButtonClick = () => setIsGasCapButtonClick(prevState => !prevState);

    const handleDoorLockButtonClick = () => setIsAboutMeEntranceButtonClick(prevState => !prevState);

    const handleAboutMeEntranceButtonClick = () => {
        setIsAboutMeEntranceButtonClick(prevState => !prevState);
        setIsEntranceOfAboutMeCleared(false);
    };

    const handleEntranceOfAboutMeCleared = () => {
        setIsEntranceOfAboutMeCleared(prevState => !prevState);
        setIsAboutMeEntranceButtonClick(false);
    }

    const handleIndicatorButtonClick = () => setIsIndicatorButtonClick(prevState => !prevState);

    const heyText = '< Hey There />';

    return (

        <>

            <div className="my-assistant-room">

                <div className=
                    {isTransformedButtonClick ?
                        "my-robot" :
                        "my-car"}
                >

                    <div className=
                        {isTransformedButtonClick ?
                            "my-robot-body" :
                            "my-car-body"}
                    >

                        <div
                            className={
                                `
                                    ${isTransformedButtonClick ?
                                    'my-robot-power' :
                                    (isIndicatorButtonClick ?
                                        'my-car-front-light light-opened' :
                                        'my-car-front-light')
                                }
                                `
                            }
                            onClick={!isTransformedButtonClick ?
                                handleIndicatorButtonClick :
                                handleTransformedButtonClick}
                        />

                        <div
                            className={!isTransformedButtonClick && 'my-car-front-indicator'}
                            onClick={handleTransformedButtonClick}
                        />


                        <div
                            className={isTransformedButtonClick ?
                                "my-robot-face" :
                                "my-car-tires"}
                        >

                            <div
                                className={isTransformedButtonClick ?
                                    "my-robot-eyes" :
                                    "my-car-inside-rims"}
                            >

                                <div
                                    className={isTransformedButtonClick ?
                                        "my-robot-eye" :
                                        "my-car-inside-rim"}
                                />

                                <div
                                    className={isTransformedButtonClick ?
                                        "my-robot-eye" :
                                        "my-car-inside-rim"}
                                />

                            </div>

                            <div
                                className={isTransformedButtonClick ?
                                    "my-robot-ears" :
                                    "my-car-outside-rims"}
                            >

                                <div
                                    className={isTransformedButtonClick ?
                                        "my-robot-ear" :
                                        "my-car-outside-rim"}
                                />

                                <div
                                    className={isTransformedButtonClick ?
                                        "my-robot-ear" :
                                        "my-car-outside-rim"}
                                />

                            </div>

                        </div>

                        <div
                            className={isTransformedButtonClick ?
                                "my-robot-hands" :
                                "my-car-interior"}
                        >

                            <div
                                className={
                                    `
                                       ${isTransformedButtonClick ?
                                        'my-robot-legs' :
                                        (isDoorLockButtonClick ?
                                            "my-car-door open-the-left-door open-the-right-door" :
                                            "my-car-door")
                                    }
                                    `
                                }
                            >

                                <div className={!isTransformedButtonClick && 'my-car-door-handle'} />

                                <div
                                    className={!isTransformedButtonClick &&
                                        `
                                            my-car-door-window 
                                                ${isDoorLockButtonClick ?
                                            'left-window-opened right-window-opened' :
                                            ''
                                        }

                                                ${isWindowButtonClick ?
                                            'window-opened' :
                                            ''
                                        }
                                        `
                                    }

                                >

                                    <div
                                        className={!isTransformedButtonClick &&
                                            `
                                            window-lines
                                                        
                                            ${isWindowButtonClick ?
                                                'window-lines-collapsed' :
                                                'window-lines-expand'
                                            }

                                            ${isDoorLockButtonClick ?
                                                'window-lines-collapsed' :
                                                'window-lines-expand'
                                            }
                                        `
                                        }
                                    />

                                    <div
                                        className={
                                            isTransformedButtonClick ?
                                                'my-robot-middle-of-hand' :
                                                'my-car-window-lock'
                                        }
                                        onClick={handleWindowButtonClick}
                                    />

                                </div>

                            </div>

                        </div>

                        <div
                            className={
                                `
                                    ${isTransformedButtonClick ?
                                    'my-robot-shoes-heel' :
                                    (isGasCapButtonClick ? "my-car-gas-cap cap-opened" : "my-car-gas-cap")
                                }
                                `
                            }
                            onClick={handleGasCapButtonClick}
                        />

                        <div
                            className={!isTransformedButtonClick && "my-car-silencer-1"}
                        />

                        <div
                            className={!isTransformedButtonClick && "my-car-silencer-2"}
                        />

                    </div>

                </div>

            </div>

            <div

                className={
                    `
                                entrance-of-about-me
                                    ${isAboutMeEntranceButtonClick && !isEntranceOfAboutMeCleared ?
                        'please-wait cleared' :
                        ''}
                            `
                }

            >

                <div
                    className={
                        `
                            keys-of-about-me
                                ${isAboutMeEntranceButtonClick && !isEntranceOfAboutMeCleared ?
                            'visible' : 'hidden'
                        }
                        `
                    }

                    onClick={handleEntranceOfAboutMeCleared}
                >

                    {
                        Array.from({ length: 9 }, (_, index) => (

                            <div
                                key={index}
                                className={
                                    `
                                        key-of-about-me
                                            ${isAboutMeEntranceButtonClick && !isEntranceOfAboutMeCleared ?
                                        'success' : 'failed'
                                    }
                                    `
                                }
                            />

                        ))
                    }

                </div>

                <div
                    className={
                        `
                            scene
                            ${isAboutMeEntranceButtonClick && !isEntranceOfAboutMeCleared ?
                            'vanished' :
                            'returned'
                        }
                        `
                    }>

                    <div className="cube" id="ground">
                        <div className="container">
                            <div className="left" />
                            <div className="right" />
                            <div className="top" />
                            <div className="bottom" />
                            <div className="front" />
                            <div className="back" />
                        </div>
                    </div>

                    <div className="rocks">
                        <div className="cube" id="rock-1">
                            <div className="container">
                                <div className="left" />
                                <div className="right" />
                                <div className="top" />
                                <div className="bottom" />
                                <div className="front" />
                                <div className="back" />
                            </div>
                        </div>
                        <div className="cube" id="rock-2">
                            <div className="container">
                                <div className="left" />
                                <div className="right" />
                                <div className="top" />
                                <div className="bottom" />
                                <div className="front" />
                                <div className="back" />
                            </div>
                        </div>
                        <div className="cube" id="rock-3">
                            <div className="container">
                                <div className="left" />
                                <div className="right" />
                                <div className="top" />
                                <div className="bottom" />
                                <div className="front" />
                                <div className="back" />
                            </div>
                        </div>
                        <div className="cube" id="rock-4">
                            <div className="container">
                                <div className="left" />
                                <div className="right" />
                                <div className="top" />
                                <div className="bottom" />
                                <div className="front" />
                                <div className="back" />
                            </div>
                        </div>
                        <div className="cube" id="rock-5">
                            <div className="container">
                                <div className="left" />
                                <div className="right" />
                                <div className="top" />
                                <div className="bottom" />
                                <div className="front" />
                                <div className="back" />
                            </div>
                        </div>
                    </div>

                    <div className="jedi">
                        <div className="head">
                            <div className="cube" id="head">
                                <div className="container">
                                    <div className="left" />
                                    <div className="right" />
                                    <div className="top" />
                                    <div className="bottom" />
                                    <div className="front" />
                                    <div className="back" />
                                </div>
                            </div>
                            <div className="cube" id="neck">
                                <div className="container">
                                    <div className="left" />
                                    <div className="right" />
                                    <div className="top" />
                                    <div className="bottom" />
                                    <div className="front" />
                                    <div className="back" />
                                </div>
                            </div>
                            <div className="cube" id="nose">
                                <div className="container">
                                    <div className="left" />
                                    <div className="right" />
                                    <div className="top" />
                                    <div className="bottom" />
                                    <div className="front" />
                                    <div className="back" />
                                </div>
                            </div>
                            <div className="eyes">
                                <div className="cube" id="eye-left">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="eye-right">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                            </div>
                            <div className="hair">
                                <div className="cube" id="hair-top">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="hair-center">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="hair-center-back">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="hair-back">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <div className="cube" id="body">
                                <div className="container">
                                    <div className="left" />
                                    <div className="right" />
                                    <div className="top" />
                                    <div className="bottom" />
                                    <div className="front" />
                                    <div className="back" />
                                </div>
                            </div>
                        </div>
                        <div className="legs">
                            <div className="leg-left">
                                <div className="cube" id="leg-left">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="foot-left">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                            </div>
                            <div className="leg-right">
                                <div className="cube" id="leg-right">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="foot-right">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="arms">
                            <div className="arm-left">
                                <div className="cube" id="arm-left">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="elbow-left">
                                    <div className="cube" id="arm-left-bottom">
                                        <div className="container">
                                            <div className="left" />
                                            <div className="right" />
                                            <div className="top" />
                                            <div className="bottom" />
                                            <div className="front" />
                                            <div className="back" />
                                        </div>
                                    </div>
                                    <div className="cube" id="hand-left">
                                        <div className="container">
                                            <div className="left" />
                                            <div className="right" />
                                            <div className="top" />
                                            <div className="bottom" />
                                            <div className="front" />
                                            <div className="back" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="arm-right">
                                <div className="cube" id="arm-right">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="cube" id="hand-right">
                                    <div className="container">
                                        <div className="left" />
                                        <div className="right" />
                                        <div className="top" />
                                        <div className="bottom" />
                                        <div className="front" />
                                        <div className="back" />
                                    </div>
                                </div>
                                <div className="light-saber">
                                    <div className="cube" id="light-saber">
                                        <div className="container">
                                            <div className="left" />
                                            <div className="right" />
                                            <div className="top" />
                                            <div className="bottom" />
                                            <div className="front" />
                                            <div className="back" />
                                        </div>
                                    </div>
                                    <div className="cube" id="light-saber-bolster">
                                        <div className="container">
                                            <div className="left" />
                                            <div className="right" />
                                            <div className="top" />
                                            <div className="bottom" />
                                            <div className="front" />
                                            <div className="back" />
                                        </div>
                                    </div>
                                    <div className="cube" id="light-saber-handle">
                                        <div className="container">
                                            <div className="left" />
                                            <div className="right" />
                                            <div className="top" />
                                            <div className="bottom" />
                                            <div className="front" />
                                            <div className="back" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div
                    className='the-entrance-of-about-me'
                >

                    <button

                        type='button'

                        className={
                            `
                                button-for-the-entrance-of-about-me
                                ${isAboutMeEntranceButtonClick && !isEntranceOfAboutMeCleared ?
                                'clicked allowing-the-user' :
                                'not-clicked not-allowing-the-user'
                            }
                            `
                        }

                        onClick={handleAboutMeEntranceButtonClick}

                    >

                        <span>CLICK</span>

                        <div className='loading-lights-of-button-for-the-entrance-of-about-me'>

                            {
                                Array.from({ length: 12 }, (_, index) => (

                                    <div
                                        key={index}
                                        className=
                                        {
                                            isAboutMeEntranceButtonClick && !isEntranceOfAboutMeCleared ?
                                                `${loadingLightOfLock0fEntranceOfAboutMe} lights-on` :
                                                `${loadingLightOfLock0fEntranceOfAboutMe} lights-off`
                                        }

                                    />

                                ))
                            }

                        </div>

                        <div className="hover-area">

                            {

                                Array.from({ length: 65 }, (_, i) => (

                                    <div
                                        className={hoverDirections}
                                        key={i} />

                                ))

                            }

                            <div className="icon-about-me">
                                <div className="roof roof-1" />
                                <div className="roof roof-2" />
                                <div className="roof-design roof-design-1" />
                                <div className="roof-design roof-design-2" />
                                <div className="roof-side roof-side-1" />
                                <div className="roof-side roof-side-2" />
                                <div className="roof-wall roof-wall-1" />
                                <div className="roof-wall roof-wall-2" />
                                <div className="wall wall-1" />
                                <div className="wall wall-2" />
                                <div className="wall wall-3" />
                                <div className="wall wall-4" />
                                <div className="door" />
                                <div className="floor" />
                            </div>

                        </div>

                    </button>

                </div>

                <div className='about-me'>

                    <h2>ABOUT ME.</h2>

                    <span>{heyText} First And Foremost, A Big Thank You For Getting Here;</span> <br />

                    <p>
                        I'm <strong>Tayyab</strong>, a skilled Frontend Developer holding an associate degree in Software
                        Engineering. I specialize in creating engaging websites through expertise in HTML5, CSS3 and a strong
                        focus on JavaScript frameworks such as React.JS. As a self-directed learner, I’ve dedicated myself to skill
                        development by engaging in multi-faceted projects. Along with developing websites, I’ve covered various aspects
                        of creativity, from turning realistic cars into animated robots to applying smooth transitions and animations
                        with a simple click.
                    </p>

                    <div className="tech-images">
                        <div className='prog-lang'><img src={html5} alt="HTML5" /></div>
                        <div className='prog-lang'><img src={css3} alt="CSS3" /></div>
                        <div className='prog-lang'><img src={javascript} alt="JAVASCRIPT" /></div>
                        <div className='prog-lang'><img src={bootstrap} alt="BOOTSTRAP" /></div>
                        <div className='prog-lang'><img src={mongoDB} alt="MONGODB" /></div>
                        <div className='prog-lang'><img className='express' src={expressJS} alt="EXPRESS.JS" /></div>
                        <div className='prog-lang'><img src={reactJS} alt="REACT.JS" /></div>
                        <div className='prog-lang'><img src={nodeJS} alt="NODE.JS" /></div>
                    </div>

                </div>

            </div>

        </>

    )

}

export default About;