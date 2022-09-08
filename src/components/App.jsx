import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './ui/Header';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Main from './pages/Main';
import AdminProfile from './pages/AdminProfile';


function App({ allTeas, userSession }) {

  const [session, setSession] = useState(userSession || null);

  return (
    <>
      <Header session={session} setSession={setSession}/>
      <Routes>
        <Route path="/" element={<Main allTeas={allTeas} />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminprofile" element={<AdminProfile />} />
      </Routes>
    </>
  );
}

export default App;
