import React, { useState, useTransition } from 'react';
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks"

//Moment Js Library
import moment from "moment"

//Style Components
import styled from "styled-components"

//Loading Components
import Loading from "../shared/Loading"


//Chart js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const CoinChart = () => {
    const params = useParams()
    const CoinName = params.id

    const [days, setDays] = useState()
    const [historyChartDay, setHistoryChartDay] = useState("1h")
    const [isPending, startTransition] = useTransition()

    //Style Components
    const Container = styled.div`
        width: 100%;
    `
    const BtnContainer = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 2rem 0;
        button {
            padding: 10px 15px;
            background-color: #3671E9;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
            font-size: 18px;
        }
        
        @media screen and (max-width: 500px) {
            flex-wrap: wrap;
        }
        `

    const InputContainer = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        
        input {
            width: 18rem;
            height: 2rem;
            background-color: #27272A;
            color: #fff;
            font-size: 18px;
            padding: 1.5rem 0 1.5rem 1rem;
            border-radius: 0.7rem;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;
        }
    `

    //Fetch Data
    const [{ data, loading, error }, refetch] = useAxios(
        `https://api.coingecko.com/api/v3/coins/${CoinName}/market_chart?vs_currency=usd&days=${historyChartDay}`
    )

    if (loading) return <Loading />

    const coinChartData = data.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }))

    //Chart Js Config
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
    }

    const mainData = coinChartData.map(value => moment(value.x).format('MMMM Do YYYY, h:mm:ss a'));

    console.log(mainData);
    const datas = {
        labels: mainData,
        datasets: [
            {
                fill: true,
                label: CoinName,
                data: coinChartData.map(val => val.y),
                borderColor: '#3671E9',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }

    //Functions
    const BtnHistoryDayHandler = (event) => {
        setHistoryChartDay(event.target.id)
        refetch()
    }

    const InputHistoryDayHandler = (event) => {
        startTransition(() => {
            setDays(event.target.value)
            setHistoryChartDay(event.target.value)
            refetch()
        })

    }


    return (
        <Container>
            <InputContainer>
                <input type="text" placeholder='Search By Number Days....' value={days} onChange={InputHistoryDayHandler} autoFocus />
            </InputContainer>
            {
                data ?
                    <>
                        <BtnContainer>
                            <button onClick={BtnHistoryDayHandler} id={"1h"}>1h</button>
                            <button onClick={BtnHistoryDayHandler} id={"24h"}>24h</button>
                            <button onClick={BtnHistoryDayHandler} id={"7d"}>7d</button>
                            <button onClick={BtnHistoryDayHandler} id={"14d"}>14d</button>
                            <button onClick={BtnHistoryDayHandler} id={"30d"}>30d</button>
                            <button onClick={BtnHistoryDayHandler} id={"360d"}>1yr</button>
                        </BtnContainer>
                        <Line options={options} data={datas} />

                    </>
                    :
                    <Loading />

            }
        </Container>
    );
};

export default CoinChart;