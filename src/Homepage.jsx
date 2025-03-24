import React from "react";
import { images } from "./assets/images";
import { video05, videos } from "./assets/videos";

const Homepage = () => {
  const handleDownload = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='columns-[200px] max-sm:columns-[150px] gap-0 '>
      <>
        {images.map((image, index) => (
          <div key={index} className='p-1 hover:scale-105 transition-all duration-150 '>
            <img
              loading='lazy'
              src={image}
              alt={`image-${index}`}
              className='w-full cursor-pointer'
              onClick={() => handleDownload(image, `image-${index}.jpg`)}
            />
          </div>
        ))}
        {videos.map((video, index) => (
          <div key={index} className='p-1 hover:scale-105 transition-all duration-150 '>
            <video
              autoPlay
              loop
              muted
              playsInline
              download
              controls={false}
              className='w-full cursor-pointer'
              onClick={() => handleDownload(video, `video-${index}.mp4`)}
            >
              <source src={video} type='video/mp4' />
            </video>
          </div>
        ))}
      </>
    </div>
  );
};

export default Homepage;
