import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from './Banner';
import BottomBanner from './BottomBanner';
import Products from './Products';
import Subscribe from './Subscribe';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div id="home">
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <BottomBanner></BottomBanner>
            <Testimonials></Testimonials>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;