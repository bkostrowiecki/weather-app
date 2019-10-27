import { useState, useEffect } from 'react';

export const usePrefetchedImages = (imageUrls: string[]) => {
  const [didPrefetchImages, setDidPrefetchImages] = useState(false);

  useEffect(() => {
    let prefetchingCounter = 1;
    imageUrls.forEach(imageUrl => {
      const image = new Image();
      image.src = imageUrl;
      image.onload = () => {
        prefetchingCounter++;

        if (prefetchingCounter === imageUrls.length) {
          setDidPrefetchImages(true);
        }
      };
    });
  }, [imageUrls]);

  return didPrefetchImages;
};
