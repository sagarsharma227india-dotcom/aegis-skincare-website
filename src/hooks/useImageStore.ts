import { useState, useEffect } from 'react';

const FALLBACK_IMAGE = '/images/products/aegis-wash.jpg';

export const useImageStore = (id: string, defaultImage: string) => {
  const [image, setImage] = useState(defaultImage || FALLBACK_IMAGE);

  useEffect(() => {
    setImage(defaultImage || FALLBACK_IMAGE);
  }, [id, defaultImage]);

  const setCustomImage = (dataUrl: string) => {
    // Legacy stub - custom image uploads are disabled in favor of permanent local assets.
    console.log("Custom images disabled. Using permanent asset system.");
  };

  return { image, setCustomImage };
};
