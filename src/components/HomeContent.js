import React from 'react';
//images
import worldIcon from "../images/icon/world.png"
import chartIcon from "../images/icon/chart.png"
import personIcon from "../images/icon/Person.png"
import vector from "../images/Illustrations.png"

//Style 
import styled from "styled-components"

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10rem 15rem 10rem 15rem;
    gap: 8rem;
`
const CartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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

    h1 {
        color: #fff;
        font-weight: 900;
        font-size: 30px;
    }
    h5 {
        color: #E0E0E0;
        font-weight: 300;
        font-size: 15px;
    }
`

const VectorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const VectorText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h1 {
        font-size: 45px;
        color: #fff; 
        width: 40rem;
        font-weight: 900;
    }
    h5 {
        color: #E0E0E0; 
        line-height: 1.7rem;
        width: 30rem;
    }
`



const HomeContent = () => {
    return (
        <Container>
            <CartContainer>
                <Cart>
                    <img src={chartIcon} alt="" />
                    <CartTextContainer>
                        <h1>$30B</h1>
                        <h5>Digital Currency Exchanged</h5>
                    </CartTextContainer>
                </Cart>
                <Cart>
                    <img src={personIcon} alt="" />
                    <CartTextContainer>
                        <h1>10M+</h1>
                        <h5>Trusted Wallets Investor</h5>
                    </CartTextContainer>
                </Cart>
                <Cart>
                    <img src={worldIcon} alt="" />
                    <CartTextContainer>
                        <h1>195</h1>
                        <h5>Countries Supported</h5>

                    </CartTextContainer>
                </Cart>
            </CartContainer>

            <VectorContainer>
                <div>
                    <img src={vector} alt="Graphic mining" />
                </div>
                <VectorText>
                    <h1>Why you should choose CRAPPO</h1>
                    <h5>Experience the next generation cryptocurrency platform . No financial borders extra fees and fake reveiws.</h5>
                </VectorText>
            </VectorContainer>
        </Container>
    );
};

export default HomeContent;