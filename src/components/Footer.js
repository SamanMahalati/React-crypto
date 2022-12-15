import React from 'react';

//Images
import VisaIcon from "../images/Visa.png"
import MasterCardIcon from "../images/Mastercard.png"
import BitcoinIcon from "../images/Bitcoin.png"
import Logo from "../images/Logo.png"
//Social Icon
import FaceBookIcon from "../images/Social/facebook-f 1.png"
import InstagramIcon from "../images/Social/instagram 1.png"
import LinkedinIcon from "../images/Social/linkedin 1.png"
import TwitterIcon from "../images/Social/twitter 1.png"
import YoutubeIcon from "../images/Social/youtube 1.png"

//Style
import styled from "styled-components"

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 15rem 5rem 15rem;
    width: 100%;
    gap: 8rem;
    
    @media screen and (max-width: 1460px) {
        padding: 5rem 10rem 5rem 10rem;
    }
    @media screen and (max-width: 1300px) {
        padding: 5rem 5rem 5rem 5rem;
    }
    @media screen and (max-width: 430px) {
        padding: 5rem 2rem 5rem 2rem;
    }
    `

const FooterMain = styled.footer`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: #fff;
    width: 100%;
    
    @media screen and (max-width: 1040px) {
        gap: 5rem;
        flex-wrap: wrap;
        align-items: center;
    }

    @media screen and (max-width: 650px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    h2 {
        order: 1;
    }
`

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (max-width: 1060px) {
        padding: 0 2rem;
    }
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    li {
        font-weight: 300;
        font-size: 18px;
        cursor: pointer;
    }
`

const FooterTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    h1 {
        font-weight: 900;
        text-align: center;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.3rem;
    }

    @media screen and (max-width: 540px) {
        div {
            flex-direction: column;
        }
    }
    @media screen and (max-width: 320px) {
        h1 {
            font-size: 25px;
            line-height: 2.5rem;
        }
    }
`

const FooterAboutUs = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    h3 {
        font-weight: 100;
    }
    div {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    @media screen and (max-width: 1040px) {
        flex-direction: column;
        gap: 2rem;
        h3 {
            order: 1;
        }
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterMain>
                <LogoContainer>
                    <h2>CRRAPO</h2>
                    <img src={Logo} alt="logo" />
                </LogoContainer>
                <ListContainer>
                    <h3>Resources</h3>
                    <List>
                        <li>Download Whitepapper</li>
                        <li>Smart Token</li>
                        <li>Blockchain Explorer</li>
                        <li>Crypto API</li>
                        <li>Interest</li>
                    </List>
                </ListContainer>

                <ListContainer>

                    <h3>Quick Link</h3>
                    <List>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Contact</li>
                    </List>
                </ListContainer>

                <FooterTitle>
                    <h1>We accept following payment systems</h1>
                    <div>
                        <img src={VisaIcon} alt="Visa Icon" />
                        <img src={MasterCardIcon} alt="MasterCard Icon" />
                        <img src={BitcoinIcon} alt="Bitcoin Icon" />
                    </div>
                </FooterTitle>
            </FooterMain>

            <FooterAboutUs>
                <h3>©2021 CRAPPO. All rights reserved</h3>
                <div>
                    <img src={FaceBookIcon} alt="FaceBook Icon" />
                    <img src={InstagramIcon} alt="Instagram Icon" />
                    <img src={LinkedinIcon} alt="Linkedin Icon" />
                    <img src={TwitterIcon} alt="Twitter Icon" />
                    <img src={YoutubeIcon} alt="Youtube Icon" />
                </div>
            </FooterAboutUs>
        </FooterContainer>
    );
};

export default Footer;