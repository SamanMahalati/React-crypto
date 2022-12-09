import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchCoins } from '../redux/Coin/coinAction';

import styled from 'styled-components';

//Componets
import Coin from './Coin';

const Coins = () => {
    const dispatch = useDispatch()
    const coinState = useSelector(state => state.coinState)

    useEffect(() => {
        dispatch(fetchCoins())
    }, [])

    const Table = styled.table`
    width: 100%;
    color: #fff;
    border-collapse: collapse;
    background-color: #404040;
    text-align: center;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 11.3115px 40px 0px;

    th {
        color: #fff;
        background-color: #27272A ;
        padding: 1rem 0;
    }
    img {
        width: 3rem;
    }
    `

    const CoinSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 4.5rem 0 4.5rem;

    div {
        width: 100%;
        height: 600px;
        overflow: scroll;
        /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px 10px 10px 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #3671E9; 
  border-radius: 10px;
}
    }
`

    return (
        <CoinSection>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th style={{ borderTopLeftRadius: "1rem" }}>#</th>
                            <th>Coin</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>24h</th>
                            <th>Volume</th>
                            <th style={{ borderTopRightRadius: "1rem" }}>Mkt Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coinState.loading ?
                                <h1>Loading .....</h1> :
                                coinState.error ?
                                    <h1>Something wrong !</h1>
                                    :
                                    coinState.coins.map(coinData => <Coin key={coinData.id} data={coinData} />)
                        }
                    </tbody>
                </Table>
            </div>
        </CoinSection>
    );
};

export default Coins;