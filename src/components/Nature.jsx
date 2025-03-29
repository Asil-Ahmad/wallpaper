"use client";
import React, { useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { alvida } from "../assets/alvida";
import { natures } from "../assets/nature";

const Nature = () => {
  const handleDownload = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Shuffle only Nature images
  const shuffledImages = useMemo(() => {
    return natures.map((img) => ({ type: "image", src: img })).sort(() => Math.random() - 0.5); // Shuffle the array
  }, []);

  return (
    <div className='columns-[200px] max-sm:columns-[150px] gap-0'>
      {shuffledImages.map((media, index) => {
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
            {inView && (
              <img
                loading='lazy'
                src={media.src}
                alt={`media-${index}`}
                className='w-full cursor-pointer rounded-lg'
                onClick={() => handleDownload(media.src, `image-${index}.jpg`)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Nature;
