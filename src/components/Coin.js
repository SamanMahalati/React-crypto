import React from 'react';

import styled from 'styled-components';

const Coin = ({ data }) => {

    const BodyMenu = styled.div`
        display: grid;
        align-items: center;
        grid-template-columns: 5rem 10rem 1fr 1fr 1fr 1fr 1fr;
        background-color: #404040;
        color: #fff;
        width: 100%;
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        margin: 0.5rem 0;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;

        img {
            width: 2.5rem;
        }
    `
    return (
        <>
            <BodyMenu>
                <h3>{data.market_cap_rank}</h3>
                <h3><img src={data.image} alt="" /></h3>
                <h3>{data.name}</h3>
                <h3>${data.current_price.toLocaleString()}</h3>
                <h3>{data.price_change_percentage_24h.toFixed(2)}  %</h3>
                <h3>${data.total_volume.toLocaleString()}</h3>
                <h3>${data.market_cap.toLocaleString()}</h3>
            </BodyMenu>
        </>
    );
};

export default Coin;