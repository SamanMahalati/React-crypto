import React from 'react';

import styled from 'styled-components';

//React Router Dom 
import { Link } from "react-router-dom"

const Coin = ({ data }) => {

    const BodyMenu = styled.div`
        display: grid;
        align-items: center;
        grid-template-columns: 5rem 10rem 1fr 1fr 1fr 1fr 1fr;
        background-color: #404040;
        color: #fff;
        max-width: 100%;
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        margin: 0.5rem 0;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
        
        img {
            width: 2.5rem;
        }
        
        @media screen and (max-width: 1280px){
            grid-template-columns: 2rem 5rem 1fr 1fr 1fr 1fr 1fr;
        }
        @media screen and (max-width: 1100px){
            grid-template-columns: 2rem 4rem 1fr 1fr 1fr 1fr 1fr;
            h3 {
                padding: 1rem;
                font-size: 20px;
                font-weight: 300;
            }
        }
        @media screen and (max-width: 960px){
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            img {
            width: 3rem;
            }
        }
        `

    const LabelItem = styled.span`
        display: none;
        font-size: 24px;
        font-weight: 700;

        @media screen and (max-width: 960px){
            display: block;
        }
        @media screen and (max-width: 430px){
            font-size: 20px;
        }
        @media screen and (max-width: 380px){
            font-size: 17px;
        }
    `

    const ContainerLabel = styled.div`
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px 0;
        @media screen and (max-width: 960px){
            border-bottom: 1px solid #27272A;
        }
    `

    const CoinSection = styled.div`
        width: 100%;
    `
    return (
        <CoinSection>
            <Link to={`/Coins/${data.id}`}>
                <BodyMenu>
                    <ContainerLabel>
                        <LabelItem>#</LabelItem>
                        <h3>{data.market_cap_rank}</h3>
                    </ContainerLabel>

                    <ContainerLabel>
                        <LabelItem>Coin</LabelItem>
                        <h3><img src={data.image} alt="coinImages" /></h3>
                    </ContainerLabel>

                    <ContainerLabel>
                        <LabelItem>Name</LabelItem>
                        <h3>{data.name}</h3>
                    </ContainerLabel>

                    <ContainerLabel>
                        <LabelItem>Price</LabelItem>
                        <h3>${data.current_price ? data.current_price.toLocaleString() : "?"}</h3>
                    </ContainerLabel>

                    <ContainerLabel>
                        <LabelItem>24h</LabelItem>
                        <h3>{data.price_change_percentage_24h ? data.price_change_percentage_24h.toFixed(2) : "?"}</h3>
                    </ContainerLabel>

                    <ContainerLabel>
                        <LabelItem>Volume</LabelItem>
                        <h3>${data.total_volume ? data.total_volume.toLocaleString() : "?"}</h3>
                    </ContainerLabel>

                    <ContainerLabel>
                        <LabelItem>Mkt Cap</LabelItem>
                        <h3>${data.market_cap ? data.market_cap.toLocaleString() : "?"}</h3>
                    </ContainerLabel>
                </BodyMenu>
            </Link>
        </CoinSection>
    );
};

export default Coin;