import React, { createContext, useState } from 'react';

export const CoinDayChartContext = createContext()

const CoinDayChartContextProvider = ({children}) => {

    const [historyChartDay, setHistoryChartDay] = useState("1h")

    return (
        <CoinDayChartContext.Provider value={{historyChartDay , setHistoryChartDay}}>
            {children}
        </CoinDayChartContext.Provider>
    );
};

export default CoinDayChartContextProvider;