import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://tse4.mm.bing.net/th?id=OVP.8fXH3lz9cVtHjOKCsgk99AHgFo&pid=Api&h=360&w=480&c=7&rs=1",
    "https://media.licdn.com/dms/image/v2/D5603AQGlpMWctiFUqQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720502522914?e=1743033600&v=beta&t=vAfLrt54XKPe4dthQQjqSApTFfktv_QVt6CxYqltsQw",
    "https://tse1.mm.bing.net/th?id=OVP.a516Dlz9K2OEenhlHSLCVAHgFo&pid=Api&h=360&w=480&c=7&rs=1",
    "https://tse3.mm.bing.net/th?id=OVP.QvPph5jZzo3oKOmmjQgwVgHgFo&pid=Api&h=360&w=480&c=7&rs=1",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
  }, []);

  return (
    <div>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        style={{ width: "500px", height: "500px" }}
      />
    </div>
  );
};

export default ImageSlider;
