import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from "styled-components"

import axios from 'axios';

//Library for exchange html element to text
import DOMPurify from "dompurify"

//Loading Components
import Loading from '../shared/Loading';

//Components
import CoinChart from './CoinChart';

const DetailCoin = () => {

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
    `

    const CoinNameBox = styled.div`
        background-color: #27272A;
        padding: 2rem 5rem;
        width: 100%;
        font-size: 25px;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
        text-align: center;
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
    `

    const CoinCurrentPrice = styled.div`
        h4 {
            font-weight: 900;
            font-size: 45px;
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
    `
    const PriceStatus = styled.div`
        background-color: #404040;
        padding: 1rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
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

    const [coin, setCoin] = useState([])
    const [loading, setLoading] = useState(true)

    const Params = useParams()
    const coinID = Params.id

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinID}`)
            .then(response => {
                const data = response.data
                setCoin(data)
                setLoading(false)
            })
            .catch(error => {
                setLoading(true)
            })
    }, [])

    return (
        <Container>
            {
                loading ? <Loading /> :
                    <>
                        <CoinNameBox>
                            <h1>{coin.name}</h1>
                        </CoinNameBox>

                        <CoinContent>
                            <CoinContentLeft>
                                <h4>Rank #{coin.market_cap_rank}</h4>
                                <CoinContentLeftRank>
                                    <img src={coin.image.small} />
                                    (
                                    <h4>{coin.symbol.toUpperCase()}</h4>
                                    /
                                    <h4>{coin.name}</h4>
                                    )
                                </CoinContentLeftRank>
                            </CoinContentLeft>
                            <CoinCurrentPrice>
                                <h4>${coin.market_data.current_price.usd.toLocaleString()}</h4>
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
                                        <td>{coin.market_data.price_change_percentage_1h_in_currency.usd ? <p>%{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}</p> : null}</td>
                                        <td>{coin.market_data.price_change_percentage_24h_in_currency.usd ? <p>%{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}</p> : null}</td>
                                        <td>{coin.market_data.price_change_percentage_7d_in_currency.usd ? <p>%{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}</p> : null}</td>
                                        <td>{coin.market_data.price_change_percentage_14d_in_currency.usd ? <p>%{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}</p> : null}</td>
                                        <td>{coin.market_data.price_change_percentage_30d_in_currency.usd ? <p>%{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}</p> : null}</td>
                                        <td>{coin.market_data.price_change_percentage_1y_in_currency.usd ? <p>%{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}</p> : null}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </TableBox>

                        <CoinChart/>

                        <PriceStatusBox>
                            <PriceStatus>
                                <h2>24h Low</h2>
                                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                            </PriceStatus>
                            <PriceStatus>
                                <h2>Market cap</h2>
                                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                            </PriceStatus>
                            <PriceStatus>
                                <h2>24h high</h2>
                                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                            </PriceStatus>
                            <PriceStatus>
                                <h2>circulating supply</h2>
                                <p>${coin.market_data.circulating_supply.toLocaleString()}</p>
                            </PriceStatus>
                        </PriceStatusBox>


                        <AboutTitle>About {coin.name} :</AboutTitle>
                        <AboutCoin dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description.en)
                        }}></AboutCoin>
                    </>
            }
        </Container>
    );
};

export default DetailCoin;