import React, { useState, useEffect } from "react";
import Homepage from "./Homepage";
import Loader from "./constant/Loader";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";

const App = () => {
  const [loading, setLoading] = useState(() => {
    return !localStorage.getItem("loaderShown");
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("loaderShown", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className='bg-black min-h-screen'>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/:id' element={<Product />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
