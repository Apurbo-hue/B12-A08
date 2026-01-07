import React from 'react';
import playStore from './../../images/playstore.png'
import appStore from './../../images/appstore.png'
import bannerimg from './../../images/hero.png'
const Home = () => {
    return (
        <div>
                        <h1>We Build
                <span className='text-[##6d36e6]'>Productive</span> Apps</h1>

                <h4>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</h4>
                <div>
                    <a href="https://play.google.com/" target='blank'> <img src={playStore} alt="" />Google Play</a>
                    <a href="https://www.apple.com/app-store/" target='blank'> <img src={appStore} alt="" />App Store</a>
                    
                     <img src={bannerimg} alt="" />
                </div>
        </div>
    );
};

export default Home;