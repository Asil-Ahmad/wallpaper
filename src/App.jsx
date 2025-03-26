import React, { useState, useEffect } from "react";
import Homepage from "./Homepage";
import Loader from "./constant/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);

  }, []);

  return (
    <div className='bg-black min-h-screen'>
      {loading ? <Loader /> : <Homepage />}
    </div>
  );
};

export default App;
