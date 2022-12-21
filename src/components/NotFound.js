import React from 'react';

//images
import NotFoundImage from "../images/Notfound.png"

//Style
import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 15rem;
    gap: 5rem;
    
    img {
        width: 40rem;
        border-radius: 2rem;
    }

    h1 {
        color: #9333EA;
        font-size: 60px;
        font-weight: 700;
    }
    
    h3 {
        color: #F59E0B;
        font-weight: 400;
        font-size: 40px;
    }
    h5 {
        color: #C4B5FD;
        font-size: 17px;
        line-height: 2rem;
    }
    
    @media screen and (max-width: 1500px) {
        padding: 2rem 10rem;
    }
    @media screen and (max-width: 1320px) {
        padding: 2rem 5rem;
    }
    @media screen and (max-width: 1150px) {
        padding: 2rem 3rem;
    }
    @media screen and (max-width: 1090px) {
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }
    @media screen and (max-width: 680px) {
        img {
            width: 30rem;
        }
    }
    @media screen and (max-width: 510px) {
        img {
            width: 20rem;
        }
    }
    @media screen and (max-width: 370px) {
        img {
            width: 15rem;
        }

        h1 {
            font-size: 50px;
            padding: 0 0 2rem 0;
        }

        h3 {
            font-size: 30px;
        }
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`


const NotFound = () => {
    return (
        <Container>
            <TextContainer>
                <div>
                    <h1>SORRY !!!</h1>
                    <h3>PAGE NOT FOUND</h3>
                </div>
                <h5>The link you follow probabley broken , or search something wrong , or the page has been removed.</h5>
            </TextContainer>
            <div>
                <img src={NotFoundImage} alt="Not Found" />
            </div>
        </Container>
    );
};

export default NotFound;