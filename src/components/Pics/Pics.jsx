import React, { useState } from 'react';
import "./Pics.scss";
import FsLightbox from "fslightbox-react";
import image1 from "../../images/gallery/image-635.jpg"
import image2 from "../../images/gallery/image-637.jpg"
import image3 from "../../images/gallery/image-638.jpg"
import image4 from "../../images/gallery/image-639.jpg"
import image5 from "../../images/gallery/image-640.jpg"
import image6 from "../../images/gallery/image-641.jpg"
import image7 from "../../images/gallery/image-642.jpg"
import image8 from "../../images/gallery/image-643.jpg"
import image9 from "../../images/gallery/image-644.jpg"
import image10 from "../../images/gallery/image-645.jpg"
import image11 from "../../images/gallery/image-646.jpg"
import image12 from "../../images/gallery/image-647.jpg"
import image13 from "../../images/gallery/image-636.jpg"

const imagePaths = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];

export default function Pics() {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  return (
    <div>
      <section>
        <div className="gallery">
          {imagePaths.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`Gallery image ${index + 1}`} 
              className="gallery-image"
              onClick={() => { 
                setToggler(!toggler); 
                setSlide(index + 1); 
              }} 
            />
          ))}
        </div>
        <FsLightbox
          toggler={toggler}
          sources={imagePaths}
          slide={slide} 
        />
      </section>
    </div>
  );
}
