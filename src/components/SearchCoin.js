import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const SearchInput = styled.input`
    background-color: #27272A;
    color: #fff;
    height: 2.5rem;
    width: 18rem;
    border-radius: 3rem;
    padding: 0 0rem 0 1rem;
    font-size: 16px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

`
const SearchContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 2rem 0;
`

const SearchCoin = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const searchHandler = (event) => {
        setSearch(event.target.value.toLowerCase())
    }

    const findCoinHandler = () => {
        navigate(`${search}`)
    }
    return (
        <SearchContainer>
            <SearchInput type="text" value={search} placeholder="Search Coin ...." onChange={searchHandler} onKeyUp={event => event.key === "Enter" ? findCoinHandler() : <h1>Nothing found</h1>} />
        </SearchContainer>
    );
};

export default SearchCoin;