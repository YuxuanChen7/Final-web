// index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Homepage from "./components/Homepage/Homepage";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Result from "./components/Result/Result";
import FavoritesList from "./components/FavoritesList/FavoritesList";
import CatFact from "./components/CatFact/CatFact"
import AddPet from "./components/AddPet/AddPet";
import CatPic from "./components/CatPic/CatPic";
import DetailedView from "./components/DetailedView/DetailedView";
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
          <Route path="/pet/:id" element={<DetailedView />} />
          <Route path="/result" element={<Result />} />
          {/* <Route path="/FavoritesList" element={<FavoritesList />} /> */}
          <Route path="/addpet" element={<AddPet />} />
          <Route path="/catfact"  element={<CatFact />} />
          <Route path="/catpic" element={<CatPic />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
