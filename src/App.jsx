import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { Detail } from "./Components/Pages/Detail/Detail";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
