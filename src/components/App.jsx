import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './ui/Header';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Main from './pages/Main';
import TeaCardPage from './pages/TeaCardPage';

function App({ allTeas, allComents }) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main allTeas={allTeas} />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tea/:id" element={<TeaCardPage allComents={allComents} />} />
      </Routes>
    </>
  );
}

export default App;
