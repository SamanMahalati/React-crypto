import React from "react";
import { Provider } from "react-redux";


//Redux Store
import Store from "./redux/store";

//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <>
    <Provider store={Store}>
      <Navbar />
      <Home/>
    </Provider>
    </>
  );
}

export default App;
