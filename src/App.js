import React from "react";
import {Navbar , Trending} from './Containers';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import './App.css';
import { DetailPage } from "./Components";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Trending />
      {/* <BrowserRouter>
        <Routes >
          <Route path="/:id" element={<DetailPage />} ></Route>
        </Routes >
      </BrowserRouter> */}
    </div>
  );
}

export default App;
