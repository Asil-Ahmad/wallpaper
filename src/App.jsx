import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import Loader from "./constant/Loader";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { initGA, trackPageView } from "./service/analytics";
import Alvida from "./components/Alvida";

const App = () => {
  const location = useLocation();
console.log(location);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    initGA(); // Initialize GA
    trackPageView(location.pathname); // Track page views
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/alvida' element={<Alvida />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
