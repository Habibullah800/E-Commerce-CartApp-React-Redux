import React from 'react';
import heroImage from '../assets/FeatureBurger-3.png'

const Hero = () => {
    return (
        <div>
            <img class=" w-screen pt-[66px] h-[250px] lg:h-[400px]" src={heroImage} alt='bann' />
        </div>
    );
};

export default Hero;