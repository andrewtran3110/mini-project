import React from 'react';
import './css/styles.css';
import Header from './components/Header';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import FeatureWork from './components/FeatureWork';
import RecentWorks from './components/RecentWorks';
import Reference from './components/Reference';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <AboutUs />
            <FeatureWork />
            <RecentWorks />
            <Reference />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;
