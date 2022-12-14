import React, { useEffect } from 'react';

//Aos Library 
import AOS from "aos";
import "aos/dist/aos.css";

//images
import InevestVector from "../images/Chart.png"
import DetailsVector from "../images/Statistic.png"
import GrowVector from "../images/Table.png"

//Styles
import styled from 'styled-components';
const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2B076E;
    color: #fff;
    padding: 8rem 15rem 10rem 15rem;
    gap: 8rem;
`

const Title = styled.h1`
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    width: 50rem;
    line-height: 4rem;
`

const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12rem;
`

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10rem;
    &:nth-child(1) {
        img {
            order: 1;
        }
    }
    &:nth-child(3) {
        img {
            order: 1;
        }
    }
`

const BoxTitle = styled.h1`
    font-weight: 900;
    font-size: 35px;
`

const BoxText = styled.h5`
    font-weight: 300;
    font-size: 25px;
`

const BoxContentContainer = styled.div`
    width: 35rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`


const MarketDetails = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <Container>
            <Title data-aos="fade-up">Market sentiments, portfolio, and run the infrastructure of your choice</Title>
            <BoxContainer>

                <Box>
                    <img src={InevestVector} alt="Chart" data-aos="fade-left" data-aos-duration="3000"/>
                    <BoxContentContainer data-aos="fade-right" data-aos-duration="3000">
                        <BoxTitle>Invest Smart</BoxTitle>
                        <BoxText>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </BoxText>
                    </BoxContentContainer>
                </Box>

                <Box>
                    <img src={DetailsVector} alt="Crypto Chart" data-aos="fade-right" data-aos-duration="3000"/>
                    <BoxContentContainer data-aos="fade-left" data-aos-duration="3000">
                        <BoxTitle>Detailed Statistics</BoxTitle>
                        <BoxText>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</BoxText>
                    </BoxContentContainer>
                </Box>

                <Box>
                    <img src={GrowVector} alt="Table" data-aos="fade-left" data-aos-duration="3000"/>
                    <BoxContentContainer data-aos="fade-right" data-aos-duration="3000">
                        <BoxTitle>Grow your profit and track your investments</BoxTitle>
                        <BoxText>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</BoxText>
                    </BoxContentContainer>
                </Box>

            </BoxContainer>
        </Container>
    );
};

export default MarketDetails;