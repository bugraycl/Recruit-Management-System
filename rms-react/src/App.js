import React from 'react';
import { Routes, Route } from'react-router-dom';
import Main from "./components/user/Main";
import '../node_modules/font-awesome/css/font-awesome.css';
import "./assets/style/main.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;