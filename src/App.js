import React from "react";
import { Provider } from "react-redux";


//Redux Store
import Store from "./redux/store";

//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Coins from "./components/Coins";

const App = () => {
  return (
    <>
    <Provider store={Store}>
      <Navbar />
      <Home/>
      <Coins/>
    </Provider>
    </>
  );
}

export default App;
