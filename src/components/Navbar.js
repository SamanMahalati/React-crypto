import React, { useState } from 'react';
import styled from "styled-components"

//React Router Dom
import { Link } from 'react-router-dom';

//images
import Logo from "../images/Logo.png"

const Menu = styled.nav`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2.5rem 15rem;
        font-weight: 400;
        color: #fff;
        @media screen and (max-width: 1400px) {
            padding: 2.5rem 10rem;
        }
        @media screen and (max-width: 1180px) {
            padding: 2.5rem 5rem;
        }
        @media screen and (max-width: 1040px) {
            padding: 2.5rem 2rem;
        }
        `

const LogoContainer = styled.div`
            display: flex;
            align-items: center;
            gap: 1rem;
            `


const LoginBtn = styled.button`
    background-color: transparent;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    @media screen and (max-width: 960px) {
        padding: 1rem 1.5rem;
        border-radius: 3rem;
        font-size: 16px;
        font-weight: 700;
        background-color: #3671E9;
        color: #fff;
        width: 14rem;
    }
    @media screen and (max-width: 430px) {
        width: 9rem;
    }
`

const NavBtnContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.1rem;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        div {
            display: none;
        }
    }
`

const SignInBtn = styled.button`
    padding: 1rem 1.5rem;
    border-radius: 3rem;
    font-size: 16px;
    font-weight: 700;
    background-color: #3671E9;
    color: #fff;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 11.3115px 40px 0px;
    @media screen and (max-width: 960px) {
        width: 14rem;
    }
    @media screen and (max-width: 430px) {
        width: 9rem;
    }
`

const HamburgerMenu = styled.div`
    display: none;
    cursor: pointer;
    span {
        height: 0.3rem;
        width: 4rem;
        background-color: #fff;
    }
    
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        transition: 0.5s;
    }
    `

const IconContainer = styled.div`
    display: none;
    order: 1;
    svg {
        height: 2rem;
        width: 1.5rem;
        color: #fff;
    }
    @media screen and (max-width: 960px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `

const Navbar = () => {
    const [OpenMenu, setOpenMenu] = useState(false)


    const Ul = styled.ul`
        transition: all 0.5s;
        display: flex;
        align-items: center;
        gap: 5rem;
        left: 0;
        top: 0;
        list-style: none;
        font-size: 16px;
        z-index: 100;
        font-weight: 400;
        li {
            cursor: pointer;
        }
        a {
            color: #fff; 
            text-decoration: none;
        }
        
        @media screen and (max-width: 960px) {
            flex-direction: column;
            background-color: #27272A;
            position: fixed;
            transition: all 0.5s;
            left: ${OpenMenu ? "0px" : "-360px"}; 
            padding: 2rem 3rem;
            font-size: 18px;
            border-radius: 0 1rem 1rem 0;
            height: 100vh;
            gap: 2rem;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
            a {
                color: #fff;
                order: 2;

            }
            li {
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;
                width: 14rem;
                padding: 15px 10px;
                border-radius: 1rem;
                text-align: center;
                display: flex;
                align-items: center;
                transition: 0.3s;
                gap: 1.2rem;
                &:hover {
                    transition: 0.3s;
                    background-color: #3671E9;
                }
            }
        }

        @media screen and (max-width: 430px) {
            font-size: 16px;
            width: 12rem;
            li {
                width: 9rem;
            }
        }

    `



    const FirstChild = styled.span`
        transform-origin: 1px;
        @media screen and (max-width: 960px) {
            transform: ${OpenMenu ? "rotate(45deg)" : "rotate(0deg)"};
        }
        `

    const SecondChild = styled.span`
        transform-origin: 1px;
        @media screen and (max-width: 960px) {
            transform: ${OpenMenu ? "translateX(45rem)" : "translateX(0)"};
        }
        `

    const ThirdChild = styled.span`
        transform-origin: 1px;
        @media screen and (max-width: 960px) {
            transform: ${OpenMenu ? "rotate(-45deg)" : "rotate(0deg)"};
        }
        `

    const CheckClickHandler = () => {
        setOpenMenu(false)
    }


    return (
        <Menu>
            <LogoContainer>
                <img src={Logo} alt="Logo" />
                <h4>CRAPPO</h4>
            </LogoContainer>

            <HamburgerMenu onClick={() => setOpenMenu(!OpenMenu)}>
                <FirstChild></FirstChild>
                <SecondChild></SecondChild>
                <ThirdChild></ThirdChild>
            </HamburgerMenu>
            <Ul>
                <li onClick={CheckClickHandler}>
                    <Link to="/">Home</Link>
                    <IconContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                        </svg>
                    </IconContainer>
                </li>
                <li onClick={CheckClickHandler}>
                    <Link to="/Coins">Coins</Link>
                    <IconContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                        </svg>
                    </IconContainer>
                </li>
                <li onClick={CheckClickHandler}>
                    <Link to="/Blogs">Blogs</Link>
                    <IconContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                        </svg>
                    </IconContainer>
                </li>
                <li onClick={CheckClickHandler}>
                    <Link to="/AboutUs">About Us</Link>
                    <IconContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-person" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                    </IconContainer>
                </li>
                <NavBtnContainer>
                    <LoginBtn onClick={CheckClickHandler}>Login</LoginBtn>
                    <div>
                        |
                    </div>
                    <SignInBtn onClick={CheckClickHandler}>Register</SignInBtn>
                </NavBtnContainer>
            </Ul>


        </Menu>
    );
};

export default Navbar;