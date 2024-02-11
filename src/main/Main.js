import React from 'react';

//Components
import Navbar from '../Components/navbar/Navbar';
import Home from '../Components/home/Home';
import About from '../Components/about/About';

const Main = () => {

    return (

        <div className='Main'>

            <Navbar />
            
            <Home />

            <About />

        </div>

    )

}

export default Main;