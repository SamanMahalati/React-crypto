import React from 'react';

//components
import Landing from './Landing';
import HomeContent from './HomeContent';
import TradeSecure from './TradeSecure';

const Home = () => {
    return (
        <main>
            <Landing/>
            <HomeContent/>
            <TradeSecure/>
        </main>
    );
};

export default Home;