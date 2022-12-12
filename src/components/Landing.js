import React from 'react';

import styled from 'styled-components';

//Images
import Vector from "../images/Landing.png"
import Arrow from "../images/icon/arrowRight.png"

const LandingContainer = styled.section`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3rem 15rem;
        @media screen and (max-width: 1800px) {
            padding: 3rem 10rem;
        }
        @media screen and (max-width: 1600px) {
            padding: 3rem 5rem;
        }
        @media screen and (max-width: 1600px) {
            flex-wrap: wrap;
            justify-content: center;
            gap: 5rem;
        }
        @media screen and (max-width: 800px) {
            padding: 3rem 2rem;
        } 
        @media screen and (max-width: 750px) {
            font-size: 18px;
        }
    `

const LandingVectorContainer = styled.div`
        img {
            max-width: 100%;
            min-width: 40rem;
        }
        @media screen and (max-width: 1600px) {
            img {
                min-width: 60rem;
            }
        }
        @media screen and (max-width: 1200px) {
            img {
                min-width: 50rem;
            }
        }
        @media screen and (max-width: 960px) {
            img {
                min-width: 40rem;
            }
        }
        @media screen and (max-width: 720px) {
            img {
                min-width: 30rem;
            }
        }
        @media screen and (max-width: 560px) {
            img {
                min-width: 20rem;
            }
        }
        @media screen and (max-width: 370px) {
            img {
                min-width: 15rem;
            }
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
        @media screen and (max-width: 1600px) {
            align-items: center;
            justify-content: center;
            order: 1;
            text-align: center;
        }
        @media screen and (max-width: 800px) {
            h1 {
            font-size: 50px;
            line-height: 5rem;
            } 
        }
        @media screen and (max-width: 540px) {
            h1 {
            font-size: 40px;
            } 
        }
        @media screen and (max-width: 440px) {
            h1 {
            font-size: 35px;
            text-align: left;
            line-height: 4rem;
            } 
        }
        @media screen and (max-width: 380px) {
            h1 {
            font-size: 30px;
            text-align: left;
            } 
        }
        @media screen and (max-width: 330px) {
            h1 {
            font-size: 30px;
            text-align: center;
            } 
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

const Landing = () => {

    return (
        <LandingContainer>

            <LandingTextContainer>
                <h1>Fastest & secure <br /> platform to invest <br /> in crypto</h1>
                <h5>Buy and sell cryptocurrencies , trusted by 10M wallets <br /> with over $30 bilion in transaction.</h5>
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