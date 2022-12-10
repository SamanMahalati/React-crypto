import React from 'react';
import styled from "styled-components"

//React Router Dom
import { Link } from 'react-router-dom';

//images
import Logo from "../images/Logo.png"

const Navbar = () => {
    const Menu = styled.nav`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2.5rem 15rem;
        font-weight: 400;
        color: #fff;
    `

    const Ul = styled.ul`
        display: flex;
        align-items: center;
        gap: 5rem;
        list-style: none;
        font-size: 16px;
        font-weight: 400;

        li {
            cursor: pointer;
        }
        a {
            color: #fff; 
            text-decoration: none;
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
    `

    const NavBtnContainer = styled.div`
        display: flex;
        align-items: center;
        gap: 1.1rem;
    `

    const SignInBtn = styled.button`
        padding: 1rem 1.5rem;
        border-radius: 3rem ;
        font-size: 16px;
        font-weight: 700;
        background-color: #3671E9;
        color: #fff;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 11.3115px 40px 0px;
    `

    return (
        <Menu>
            <LogoContainer>
                <img src={Logo} alt="Logo" />
                <h4>CRAPPO</h4>
            </LogoContainer>

            <Ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Coins">Coins</Link></li>
                <li><Link to="/Blogs">Blogs</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>
            </Ul>
            <NavBtnContainer>
                <LoginBtn>Login</LoginBtn>
                |
                <SignInBtn>Register</SignInBtn>
            </NavBtnContainer>


        </Menu>
    );
};

export default Navbar;