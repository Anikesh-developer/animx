import React from "react";
import {Navbar , Trending} from './Containers';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import {TopRated} from './Top Rated';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes><Route path="/" Component={Navbar}></Route></Routes>
        <Routes><Route path="/" Component={Trending}></Route></Routes>
        <Routes><Route path="toprated" Component={TopRated}></Route></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;