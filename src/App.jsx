import React, { useState, useEffect, lazy, Suspense } from "react";
import Loader from "./constant/Loader";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("./components/Homepage"));
const Alvida = lazy(() => import("./components/Alvida"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Add a delay (e.g., 2000ms)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-black min-h-screen'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/alvida' element={<Alvida />} />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default App;
