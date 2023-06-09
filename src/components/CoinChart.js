import React, { useContext, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

//Moment Js Library
import moment from "moment"

//Fetch Coin Chart Data
import { fetchCoinChart } from '../redux/CoinChart/coinChartAction';

//Style Components
import styled from "styled-components"

//Loading Components
import Loading from "../shared/Loading"

//Context
import { CoinDayChartContext } from '../context/CoinDayChartProvider';

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

const CoinChart = () => {
    const params = useParams()
    const CoinName = params.id

    const dispatch = useDispatch()
    const ChartState = useSelector(state => state.coinChartState)

    const {historyChartDay , setHistoryChartDay} = useContext(CoinDayChartContext)

    useEffect(() => {
        dispatch(fetchCoinChart(CoinName, historyChartDay))
    }, [historyChartDay])

    if (ChartState.loading) return <Loading />

    const coinChartData = ChartState.coinChart.prices ? ChartState.coinChart.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) })) : null

    //Chart Js Config
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
    }

    const mainData = coinChartData ? coinChartData.map(value => moment(value.x).format('MMMM Do YYYY, h:mm:ss a')) : null;

    const datas = {
        labels: mainData,
        datasets: [
            {
                fill: true,
                label: CoinName,
                data: coinChartData ? coinChartData.map(val => val.y) : null,
                borderColor: '#3671E9',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    }

    //Functions
    const BtnHistoryDayHandler = async (event) => {
        setHistoryChartDay(event.target.id)
    }

    return (
        <Container>
            {
                ChartState.coinChart ?
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