import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Brand from './Brand/Brand';
import FeedBack from './FeedBack/FeedBack';
import './Home.css';
import Services from './Services/Services';
import Work from './Work/Work';

const Home = () => {
    return (
        <section className="home-section">
            <Header />
            <Brand />
            <Services />
            <Work />
            <FeedBack />
            <Footer />
        </section>
    );
};

export default Home;