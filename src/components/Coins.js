import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchCoins } from '../redux/Coin/coinAction';

import styled from 'styled-components';

//Componets
import Coin from './Coin';

//Loading component
import Loading from '../shared/Loading';

const Coins = () => {
    const dispatch = useDispatch()
    const coinState = useSelector(state => state.coinState)

    useEffect(() => {
        dispatch(fetchCoins())
    }, [])


    const CoinSection = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 5rem 4.5rem 0 4.5rem;
        width: 100%;

        h1 {
            background-color: #3671E9;
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 1rem;
            box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
            margin: 2rem 0;
        }
`

    const HeadMenu = styled.div`
        display: grid;
        align-items: center;
        grid-template-columns: 5rem 10rem 1fr 1fr 1fr 1fr 1fr;
        background-color: #27272A;
        color: #fff;
        width: 100%;
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        font-size: 20px;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    `

    return (
        <CoinSection>
            <HeadMenu>
                <h3>#</h3>
                <h3>Coin</h3>
                <h3>Name</h3>
                <h3>Price</h3>
                <h3>24h</h3>
                <h3>Volume</h3>
                <h3>Mkt Cap</h3>
            </HeadMenu>
            {
                coinState.loading ?
                    <Loading/> :
                    coinState.error ?
                        <h1>Network have an problem try Later ....</h1>
                        :
                        coinState.coins.map(coinData => <Coin key={coinData.id} data={coinData} />)
            }
        </CoinSection>
    );
};

export default Coins;