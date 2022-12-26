import React from 'react';
import Banner from '../banner/Banner';
import Chef from '../chef/Chef';
import Feature from '../feature/Feature';
import FeatureBurger from '../featureBurger/FeatureBurger';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureBurger></FeatureBurger>
            <Feature></Feature>
            <Chef></Chef>
        </div>
    );
};

export default Home;