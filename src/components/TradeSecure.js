import React, { useEffect } from 'react';

//Images
import BitcoinIcon from "../images/icon/Bitcoin.png"
import EthereumIcon from "../images/icon/Ethereum.png"
import LitecoinIcon from "../images/icon/Litecoin.png"

//Aos Library 
import AOS from "aos";
import "aos/dist/aos.css";

//Styles
import styled from "styled-components"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    background-color: #fff;
    width: 100%;
    padding: 7rem 15rem 7rem 15rem;
`


const Title = styled.h1`
    color: #0D0D2B;
    text-align: center;
    font-size: 40px;
    font-weight: 900;
    width: 55rem;
    margin: 0 auto;
    line-height: 3.5rem;
`

const CartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 3rem;
`

const Cart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    gap: 2rem;
    text-align: center;
    padding: 3rem 2rem 3rem 2rem;
    border-radius: 1rem;
    width: 20rem;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        background-color: #2B076E;
        color: #fff;
        transition: 0.5s;
        h5 {
            color: #fff;
        }
    }

    h5 {
        color: #828282;
    }
`

const CartNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 17px;
    h1 {
        font-weight: 900;
    }
    span {
        padding: 3px 0 0 0;
        color: #BDBDBD;
    }
`



const TradeSecure = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <Container>
            <Title>Trade securely and market the high growth cryptocurrencies.</Title>
            <CartContainer>
                <Cart data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="2500">
                    <img src={BitcoinIcon} alt="" />
                    <CartNameContainer>
                        <h1>Bitcoin</h1>
                        <span>BTC</span>
                    </CartNameContainer>
                    <h5>Digital currency in which a record of transactions is maintained.</h5>
                </Cart>
                <Cart data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                    <img src={EthereumIcon} alt="" />
                    <CartNameContainer>
                        <h1>Ethereum</h1>
                        <span>ETH</span>
                    </CartNameContainer>
                    <h5>Blockchain technology to create and run decentralized digital applications.</h5>
                </Cart>
                <Cart data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="2500">
                    <img src={LitecoinIcon} alt="" />
                    <CartNameContainer>
                        <h1>Litecoin</h1>
                        <span>LTC</span>
                    </CartNameContainer>
                    <h5>Cryptocurrency that enables instant payments to anyone in the world.</h5>
                </Cart>
            </CartContainer>
        </Container>
    );
};

export default TradeSecure;