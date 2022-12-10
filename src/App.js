import React from "react";
import { Provider } from "react-redux";

//React Router Dom
import { Route, Routes, Router } from 'react-router-dom'


//Redux Store
import Store from "./redux/store";

//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Coins from "./components/Coins";
import DetailCoin from "./components/DetailCoin";

const App = () => {
  return (
    <>
      <Provider store={Store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Coins" element={<Coins />} />
            <Route path="/Coins/:id" element={<DetailCoin />} />
          </Routes>
      </Provider>
    </>
  );
}

export default App;
