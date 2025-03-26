import React from "react";
import { tailChase } from "ldrs";
tailChase.register();

const Loader = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50'>
      <l-tail-chase size='40' speed='1.75' color='white'></l-tail-chase>
    </div>
  );
};

export default Loader;
