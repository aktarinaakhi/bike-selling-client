import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div id="home">
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;