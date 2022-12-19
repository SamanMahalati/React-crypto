import React, { useContext, useEffect, useState , useTransition } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

//Fetch Coin Detail From Api
import { fetchCoin } from '../redux/CoinDetail/coinDetailAction';

import styled from "styled-components"

//Library for exchange html element to text
import DOMPurify from "dompurify"

//Loading Components
import Loading from '../shared/Loading';

//Context
import { CoinDayChartContext } from '../context/CoinDayChartProvider';

//Components
import CoinChart from './CoinChart';

const Container = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        width: 100%;
        padding: 2rem 30rem;
        gap: 1.5rem;
        a {
            color: #fff;
            text-decoration: none;
        }
        
        @media screen and (max-width: 1820px) {
            padding: 2rem 20rem;
        }
        @media screen and (max-width: 1510px) {
            padding: 2rem 10rem;
        }
        @media screen and (max-width: 1200px) {
            padding: 2rem 5rem;
        }
        @media screen and (max-width: 1010px) {
            padding: 2rem;
        }
    `

const CoinNameBox = styled.div`
        background-color: #27272A;
        padding: 2rem 5rem;
        width: 100%;
        font-size: 25px;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        h1 {
            font-weight: 800;
            font-size: 50px;
        }
    `
const CoinContent = styled.div`
        background-color: #27272A;
        padding: 2rem 5rem;
        width: 100%;
        font-size: 25px;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 770px) {
            flex-direction: column;
            gap: 2rem;
        }
    `
const CoinContentLeft = styled.div`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        h4 {
            font-weight: 300;
            background-color: #3671E9;
            text-align: center;
            border-radius: 0.5rem;
        }
        
        @media screen and (max-width: 360px) {
            h4 {
                font-size: 23px;
            }
        }

        `
const CoinContentLeftRank = styled.div`
        display: flex;
        align-items: center;
        img {
            padding: 0 2rem 0 0;
        }
        h4 {
            padding: 0 0.5rem;
            background-color: transparent;
            font-weight: 300;
        }

        @media screen and (max-width: 360px) {
        img {
            padding: 0;
        } 
        flex-direction: column;
        gap: 1.5rem;

    }
    `

const CoinCurrentPrice = styled.div`
        h4 {
            font-weight: 900;
            font-size: 45px;
        }
        @media screen and (max-width: 360px) {
            h4 {
                font-size: 30px;
            }
        }
    `

const TableBox = styled.div`
        background-color: #27272A;
        padding: 2rem 5rem;
        width: 100%;
        font-size: 25px;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    `

const Table = styled.table`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
        tr {
            background-color: #404040;
        }
        th , td {
            padding: 10px 30px;
        }

    @media screen and (max-width: 920px) {
        display: flex;
        align-items: center;
        justify-content: center;
    tbody {
        display: flex;
        flex-direction: row;
    }
    tr {
        display: flex;
        flex-direction: column;
    }
    th , td {
            padding: 10px 80px;
    }
}
    @media screen and (max-width: 550px) {
    th , td {
            padding: 10px 40px;
    }
}
    @media screen and (max-width: 370px) {
    th , td {
            padding: 10px 20px;
    }
}
        
    `

const PriceStatusBox = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        background-color: #27272A;
        width: 100%;
        padding: 1rem;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        @media screen and (max-width: 460px) {
            grid-template-columns: 1fr;
        }
    `
const PriceStatus = styled.div`
        background-color: #404040;
        padding: 1rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 2rem;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

        p {
            font-size: 20px;
        }

        @media screen and (max-width: 460px){
            flex-direction: column;
            h2 {
                text-align: center;
            }
        }

        
    `
const AboutCoin = styled.h2`
        line-height: 3rem;

    `
const AboutTitle = styled.h1`
        font-size: 40px;
        text-align: left;
        width: 100%;
        padding: 4rem 0 0 0;
    `

const CoinContantLeftText = styled.div`
        display: flex;
    `
const InputContainer = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        
        input {
            width: 18rem;
            height: 2rem;
            background-color: #27272A;
            color: #fff;
            font-size: 18px;
            padding: 1.5rem 0 1.5rem 1rem;
            border-radius: 0.7rem;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;
        }
    `



const DetailCoin = () => {

    const { historyChartDay, setHistoryChartDay } = useContext(CoinDayChartContext)
    const [isPending , startTransition] = useTransition()
    const [days, setDays] = useState()

    console.log(historyChartDay);

    const dispatch = useDispatch()
    const coinState = useSelector(state => state.coinDetailState)

    const Params = useParams()
    const coinID = Params.id

    useEffect(() => {
        dispatch(fetchCoin(coinID))
    }, [])

    const InputHistoryDayHandler = (event) => {
        startTransition(() => {
            setDays(event.target.value)
            setHistoryChartDay(event.target.value)
        })
    }

    return (
        <Container>
            {
                coinState.loading ? <Loading /> :
                    coinState.error ? <h1>{coinState.error}</h1> :
                        <>
                            <CoinNameBox>
                                <h1>{coinState.coin.name}</h1>
                            </CoinNameBox>

                            <CoinContent>
                                <CoinContentLeft>
                                    <h4>Rank #{coinState.coin.market_cap_rank}</h4>


                                    <CoinContentLeftRank>
                                        {coinState.coin.image ? <img src={coinState.coin.image.small} alt="coin" /> : null}
                                        <CoinContantLeftText>
                                            (
                                            {coinState.coin.symbol ? <h4>{coinState.coin.symbol.toUpperCase()}</h4> : null}
                                            /
                                            {coinState.coin.name ? <h4>{coinState.coin.name}</h4> : null}
                                            )
                                        </CoinContantLeftText>
                                    </CoinContentLeftRank>
                                </CoinContentLeft>
                                <CoinCurrentPrice>
                                    {coinState.coin.market_data ? <h4>${coinState.coin.market_data.current_price.usd.toLocaleString()}</h4> : null}
                                </CoinCurrentPrice>
                            </CoinContent>


                            <TableBox>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>1h</th>
                                            <th>24h</th>
                                            <th>7d</th>
                                            <th>14d</th>
                                            <th>30d</th>
                                            <th>1yr</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {coinState.coin.market_data ? <td>{coinState.coin.market_data.price_change_percentage_1h_in_currency.usd ? <p>%{coinState.coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}</p> : null}</td> : null}
                                            {coinState.coin.market_data ? <td>{coinState.coin.market_data.price_change_percentage_24h_in_currency.usd ? <p>%{coinState.coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}</p> : null}</td> : null}
                                            {coinState.coin.market_data ? <td>{coinState.coin.market_data.price_change_percentage_7d_in_currency.usd ? <p>%{coinState.coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}</p> : null}</td> : null}
                                            {coinState.coin.market_data ? <td>{coinState.coin.market_data.price_change_percentage_14d_in_currency.usd ? <p>%{coinState.coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}</p> : null}</td> : null}
                                            {coinState.coin.market_data ? <td>{coinState.coin.market_data.price_change_percentage_30d_in_currency.usd ? <p>%{coinState.coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}</p> : null}</td> : null}
                                            {coinState.coin.market_data ? <td>{coinState.coin.market_data.price_change_percentage_1y_in_currency.usd ? <p>%{coinState.coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}</p> : null}</td> : null}
                                        </tr>
                                    </tbody>
                                </Table>
                            </TableBox>

                            <InputContainer>
                                <input type="text" placeholder='Search By Number Days....' value={days} onChange={InputHistoryDayHandler} autoFocus />
                            </InputContainer>
                            <CoinChart />

                            <PriceStatusBox>
                                <PriceStatus>
                                    <h2>24h Low</h2>
                                    {coinState.coin.market_data ? <p>${coinState.coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                                </PriceStatus>
                                <PriceStatus>
                                    <h2>Market cap</h2>
                                    {coinState.coin.market_data ? <p>${coinState.coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                                </PriceStatus>
                                <PriceStatus>
                                    <h2>24h high</h2>
                                    {coinState.coin.market_data ? <p>${coinState.coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
                                </PriceStatus>
                                <PriceStatus>
                                    <h2>circulating supply</h2>
                                    {coinState.coin.market_data ? <p>${coinState.coin.market_data.circulating_supply.toLocaleString()}</p> : null}
                                </PriceStatus>
                            </PriceStatusBox>


                            <AboutTitle>About {coinState.coin.name} :</AboutTitle>
                            {coinState.coin.description ? <AboutCoin dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(coinState.coin.description.en)
                            }}></AboutCoin> : null}
                        </>
            }
        </Container>
    );
};

export default DetailCoin;