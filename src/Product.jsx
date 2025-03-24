import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const handleDownload = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      {images.map((image, index) => (
        <Link
          to={`/${image}`}
          key={index}
          className='p-1 hover:scale-105 transition-all duration-150 '
        >
          <img
            loading='lazy'
            src={image}
            alt={`image-${index}`}
            className='w-full cursor-pointer'
            onClick={() => handleDownload(image, `image-${index}.png`)}
          />
        </Link>
      ))}
    </div>
  );
};

export default Product;
