import React, { useState, useEffect } from 'react';
import "./Pics.scss";
import FsLightbox from "fslightbox-react";
import { client, urlFor } from '../../lib/sanityClient';

export default function Pics() {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const query = `*[_type == "galleryImage"] | order(order asc) [0...9] {
          _id,
          image,
          order
        }`;
        const images = await client.fetch(query, {}, { cache: 'no-store' });
        setGalleryImages(images);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  if (loading) {
    return (
      <div>
        <section>
          <div className="gallery">Loading gallery...</div>
        </section>
      </div>
    );
  }

  const imageSources = galleryImages.map(img => urlFor(img.image).url());

  return (
    <div>
      <section>
        <div className="gallery">
          {galleryImages.map((img, index) => (
            <img
              key={img._id}
              src={urlFor(img.image).url()}
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
          sources={imageSources}
          slide={slide}
        />
      </section>
    </div>
  );
}
