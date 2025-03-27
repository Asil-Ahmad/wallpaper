import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import Loader from "./constant/Loader";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Alvida from "./components/Alvida";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, );

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-black min-h-screen'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/alvida' element={<Alvida/>} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
