import React from "react";
import {Navbar , Trending} from './Containers';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import {TopRated} from './Top Rated';
import { Contactus } from "./Components";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes><Route path="/animx" Component={Navbar}></Route></Routes>
        <Routes><Route path="/animx" Component={Trending}></Route></Routes>
        <Routes><Route path="/animx/toprated" Component={TopRated}></Route></Routes>
        {/* <Routes><Route path="/animx/contactus" Component={Contactus}></Route></Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;