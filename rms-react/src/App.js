import React from 'react';
import { Routes, Route } from'react-router-dom';
import Main from "./components/user/Main";
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