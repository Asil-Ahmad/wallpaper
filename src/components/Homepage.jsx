"use client";
import React, { useMemo } from "react";

import { useInView } from "react-intersection-observer";
import { images } from "../assets/images";
import { videos } from "../assets/videos";

const Homepage = () => {
  const handleDownload = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Combine images and videos, then shuffle them
  const shuffledMedia = useMemo(() => {
    const combined = [
      ...images.map((img) => ({ type: "image", src: img })),
      ...videos.map((vid) => ({ type: "video", src: vid })),
    ];
    return combined.sort(() => Math.random() - 0.5); // Shuffle the array
  }, []);

  return (
    <div className='columns-[200px] max-sm:columns-[150px] gap-0'>
      {shuffledMedia.map((media, index) => {
        const { ref, inView } = useInView({
          threshold: 0.1, // Trigger when 10% of the media is visible
          triggerOnce: true, // Only trigger once per media
        });

        return (
          <div
            key={`media-${index}`}
            ref={ref}
            className='p-0.5 hover:scale-105 transition-all duration-150'
          >
            {inView &&
              (media.type === "image" ? (
                <img
                  loading='lazy'
                  src={media.src}
                  alt={`media-${index}`}
                  className='w-full cursor-pointer rounded-lg '
                  onClick={() => handleDownload(media.src, `image-${index}.jpg`)}
                />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  className='w-full cursor-pointer rounded-lg'
                  onClick={() => handleDownload(media.src, `video-${index}.mp4`)}
                >
                  <source src={media.src} type='video/mp4' />
                </video>
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
