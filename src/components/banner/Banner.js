import React from 'react';
import banner from '../assets/Banner.png';
const Banner = () => {
    return (
        <div>
            <img class=" w-screen pt-[66px] h-[300px] lg:h-[490px]" src={banner} alt='bann' />
        </div>
    );
};

export default Banner;