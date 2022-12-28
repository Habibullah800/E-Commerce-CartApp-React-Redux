import React from 'react';
import Banner from '../banner/Banner';
import Card from '../card/Card';
import Chef from '../chef/Chef';
import Feature from '../feature/Feature';
import FeatureBurger from '../featureBurger/FeatureBurger';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureBurger></FeatureBurger>
            <Feature></Feature>
            <Card></Card>
            <Hero></Hero>
            <Chef></Chef>
        </div>
    );
};

export default Home;