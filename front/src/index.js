// index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Homepage from "./components/Homepage/Homepage";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Result from "./components/Result/Result";
import FavoritesList from "./components/FavoritesList/FavoritesList";
import AddPet from "./components/AddPet/AddPet";
import "./styles/global.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

const App = () => {
  return (
    <div>
      {/* No need to render FavoritesList here */}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/result" element={<Result />} />
          {/* <Route path="/FavoritesList" element={<FavoritesList />} /> */}
          <Route path="/addpet" element={<AddPet />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
