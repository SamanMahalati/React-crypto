import React from 'react';

import styled from 'styled-components';

const Coin = ({ data }) => {

    const Tr = styled.tr`
    color: #fff;
    border-bottom: 1px solid #EEEE;
        img {
            width: 3rem;
        }
        td {
            padding: 1.2rem 0;
        }
    `
    return (
        <>
            <Tr>
                <td>{data.market_cap_rank}</td>
                <td><img src={data.image} alt="" /></td>
                <td>{data.name}</td>
                <td>{data.current_price}</td>
                <td>{data.price_change_percentage_24h}</td>
                <td>{data.total_volume}</td>
                <td>{data.market_cap}</td>
            </Tr>
        </>
    );
};

export default Coin;