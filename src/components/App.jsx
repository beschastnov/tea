import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './ui/Header';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Main from './pages/Main';
import TeaCardPage from './pages/TeaCardPage';
import Teas from './ui/Teas';
import AdminProfile from './pages/AdminProfile';

function App({ allTeas, userSession, allComents }) {

  console.log(userSession)

  const [session, setSession] = useState(userSession);

  return (
    <>
      <Header session={session} setSession={setSession} />
      <Routes>
        <Route path="/" element={<Main allTeas={allTeas} session={session} setSession={setSession}/>} />
        <Route path="/teas" element={<Teas allTeas={allTeas} />} />
        <Route path="/registration" element={<Registration session={session} setSession={setSession} />} />
        <Route path="/login" element={<Login session={session} setSession={setSession} />} />
        <Route path="/tea/:id" element={<TeaCardPage allComents={allComents} />} />
        <Route path="/adminprofile" element={<AdminProfile />} />

      </Routes>
    </>
  );
}

export default App;
