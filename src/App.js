import React from "react";
import { Provider } from "react-redux";

//React Router Dom
import { Route, Routes , Navigate } from 'react-router-dom'

//Context
import CoinDayChartContextProvider from "./context/CoinDayChartProvider";


//Redux Store
import Store from "./redux/store";

//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Coins from "./components/Coins";
import DetailCoin from "./components/DetailCoin";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <CoinDayChartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Coins" element={<Coins />} />
            <Route path="/Coins/:id" element={<DetailCoin />} />
            <Route path="/NotFound" element={<NotFound />} />
            <Route path="/*" element={<Navigate to="/NotFound" />} />
          </Routes>
          <Footer />
        </CoinDayChartContextProvider>
      </Provider>
    </>
  );
}

export default App;
