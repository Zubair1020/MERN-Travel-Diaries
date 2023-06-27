import { useEffect, useState } from "react";
import { StyledSliderImg } from "./slider.style";

export default function Slider() {
  const images = [
    "https://static.tumblr.com/87c469f1f74f784ed620ef3ff216f06f/qd5soks/t2Go8jreu/tumblr_static_4lkc3zksl0u88kc480cgw08so.jpg",
    "https://static.tumblr.com/e66ff78db00284c9b9e20a24025bf703/qd5soks/OGOo8jrev/tumblr_static_a0pompmue8wko0swc4gk8ws4s.jpg",
    "https://static.tumblr.com/b2a0bfcc58943a57152eb2428833db90/qd5soks/NKro8jrew/tumblr_static_5xwnkknieewwk8kgc8s00ck8g.jpg",
    "https://ychef.files.bbci.co.uk/1600x900/p0dmqnyd.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {images.map((image, index) => (
        <StyledSliderImg
          key={index}
          src={image}
          alt="Slider Image"
          index={index}
          currentIndex={currentIndex}
        />
      ))}
    </>
  );
}
