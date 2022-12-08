import React from 'react';

import styled from 'styled-components';

//Images
import Vector from "../images/Landing.png"
import Arrow from "../images/icon/arrowRight.png"

const Landing = () => {

    const LandingContainer = styled.section`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3rem 15rem;
    `

    const LandingVectorContainer = styled.div`
        img {
            max-width: 100%;
            min-width: 40rem;
        }
    `

    const LandingTextContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        h1 {
            font-size: 70px;
            font-weight: 900;
            color: #fff;
            line-height: 5.5rem;
        }

        h5 {
            color: #E0E0E0;
            line-height: 2rem;
            font-size: 15px;
            font-weight: 400;
        }
    `

    const StartBtnContainer = styled.div`
        background-color: #3671E9;
        color: #fff;
        width: 11rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
        cursor: pointer;
        border-radius: 3rem;

        button {
            background-color: transparent;
            color: #fff;
            font-weight: 700;
            font-size: 17px;
        }
        div {
            background-color: #fff;
            height: 2rem;
            width: 2rem;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `

    return (
        <LandingContainer>

            <LandingTextContainer>
                <h1>Fastest & secure <br/> platform to invest <br/> in crypto</h1>
                <h5>Buy and sell cryptocurrencies , trusted by 10M wallets <br/> with over $30 bilion in transaction.</h5>
                <StartBtnContainer>
                    <button>Start Now</button>
                    <div>
                        <img src={Arrow} alt="" />
                    </div>
                </StartBtnContainer>
            </LandingTextContainer>

            <LandingVectorContainer>
                <img src={Vector} alt="" />
            </LandingVectorContainer>

        </LandingContainer>
    );
};

export default Landing;