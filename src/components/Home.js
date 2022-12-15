import React from 'react';

//components
import Landing from './Landing';
import HomeContent from './HomeContent';
import TradeSecure from './TradeSecure';
import MarketDetails from './MarketDetails';


const Home = () => {
    return (
        <main>
            <Landing/>
            <HomeContent/>
            <TradeSecure/>
            <MarketDetails/>
        </main>
    );
};

export default Home;