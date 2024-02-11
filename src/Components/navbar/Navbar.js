import React, { useState } from 'react';

//CSS file
import './styles.css';

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => setIsNavOpen(prevState => !prevState);

    return (

        <>

            <div className="logo__nav-toggle">

                <div className="logo">
                    <h2>TAYYAB A<span>.</span></h2>
                </div>

                <button type='button' className="nav-toggle" onClick={handleNavToggle}>
                    <i className={isNavOpen ? 'bi bi-code-slash' : 'bi bi-code'} />
                </button>

            </div>

            <nav className={isNavOpen ? 'nav active' : 'nav'}>

                <li>

                    <span className='message-for-short-screen-devices'>Oops! 🙁 It's a tiny screen!
                        <br />
                        We're sorry, but your screen size is too small to view my portfolio.
                        <br />
                        Try switching to a larger screen for the best experience.
                    </span>

                    <a href='#'>
                        <span className='nav-icon'><i className='bi bi-house-door' /></span>
                        <span className='nav-text'>Home.</span>
                    </a>

                    <a href='#'>
                        <span className='nav-icon'><i className='bi bi-info' /></span>
                        <span className='nav-text'>About Me.</span>
                    </a>

                    <a href='#'>
                        <span className='nav-icon'><i className='bi bi-filetype-jsx' /></span>
                        <span className='nav-text'>Languages.</span>
                    </a>

                    <a href='#'>
                        <span className='nav-icon'><i className='bi bi-display' /></span>
                        <span className='nav-text'>Portfolio.</span>
                    </a>

                    <a href='#'>
                        <span className='nav-icon'><i className='bi bi-chat-text' /></span>
                        <span className='nav-text'>Contact.</span>
                    </a>

                </li>

            </nav>

        </>

    )

}

export default Navbar;