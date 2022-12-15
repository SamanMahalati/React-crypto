import React, { useEffect } from 'react';

//images
import worldIcon from "../images/icon/world.png"
import chartIcon from "../images/icon/chart.png"
import personIcon from "../images/icon/Person.png"
import vector from "../images/Illustrations.png"

//Aos Library 
import AOS from "aos";
import "aos/dist/aos.css";

//Style 
import styled from "styled-components"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10rem 15rem 10rem 15rem;
    gap: 8rem;
    
    @media screen and (max-width: 1500px) {
        padding: 10rem 10rem 10rem 10rem;
    }
    @media screen and (max-width: 1350px) {
        padding: 10rem 5rem 10rem 5rem;
    }
    @media screen and (max-width: 840px) {
        padding: 10rem 2rem 10rem 2rem;
    }
`
const CartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 780px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 4rem;
    }
`

const Cart = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    img {
        background-color: #263159;
        padding: 15px;
        height: 4rem;
        width: 4rem;
        border-radius: 3rem;
    }
    
`

const CartTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    h1 {
        color: #fff;
        font-weight: 900;
        font-size: 30px;
        text-align: center;
    }
    h5 {
        color: #E0E0E0;
        font-weight: 300;
        font-size: 15px;
        text-align: center;
    }
`

const VectorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 4rem;

    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
    @media screen and (max-width: 610px) {
        img {
            width: 25rem;
            height: 15rem;
        }
    }
    @media screen and (max-width: 440px) {
        img {
            width: 20rem;
            height: 15rem;
        }
    }
    @media screen and (max-width: 340px) {
        img {
            width: 17rem;
            height: 13rem;
        }
    }
`

const VectorText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h1 {
        font-size: 45px;
        color: #fff; 
        font-weight: 900;
        width: 100%;
        text-align: center;
    }
    h5 {
        color: #E0E0E0; 
        line-height: 1.7rem;
        width: 30rem;
        width: 100%;
        text-align: center;
    }
`



const HomeContent = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <Container>
            <CartContainer>
                <Cart data-aos="fade-up" data-aos-anchor-placement="bottom-center" data-aos-duration="2000">
                    <img src={chartIcon} alt="" />
                    <CartTextContainer>
                        <h1>$30B</h1>
                        <h5>Digital Currency Exchanged</h5>
                    </CartTextContainer>
                </Cart>
                <Cart data-aos="fade-up" data-aos-anchor-placement="bottom-center" data-aos-duration="2000">
                    <img src={personIcon} alt="" />
                    <CartTextContainer>
                        <h1>10M+</h1>
                        <h5>Trusted Wallets Investor</h5>
                    </CartTextContainer>
                </Cart>
                <Cart data-aos="fade-up" data-aos-anchor-placement="bottom-center" data-aos-duration="2000">
                    <img src={worldIcon} alt="" />
                    <CartTextContainer>
                        <h1>195</h1>
                        <h5>Countries Supported</h5>

                    </CartTextContainer>
                </Cart>
            </CartContainer>

            <VectorContainer>
                <div data-aos="fade-up-right" data-aos-duration="2000">
                    <img src={vector} alt="Graphic mining" />
                </div>
                <VectorText data-aos="fade-up-left" data-aos-duration="2000">
                    <h1>Why you should choose CRAPPO</h1>
                    <h5>Experience the next generation cryptocurrency platform . No financial borders extra fees and fake reveiws.</h5>
                </VectorText>
            </VectorContainer>
        </Container>
    );
};

export default HomeContent;