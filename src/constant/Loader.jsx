import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className=" w-48 h-48">
                <DotLottieReact 
                fetchPriority="auto"    
                    src='/public/loader.lottie' 
                    loop 
                    autoplay 
                    speed={1} 
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

export default Loader;
