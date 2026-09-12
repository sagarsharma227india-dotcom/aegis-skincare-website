import { useState, useEffect } from 'react';

// Module-level in-memory cache ensuring instant synchronization across modal/catalog lifecycles
const memoryImageStore = new Map<string, string>();

export const getStoredImage = (id: string, fallback: string): string => {
  if (memoryImageStore.has(id)) {
    return memoryImageStore.get(id)!;
  }

  // Normalization keys to check (e.g., 'aegis-starter-bundle', 'starter-bundle', 'starter', 'aegis-wash', 'wash', etc.)
  const cleanId = id.toLowerCase().trim();
  const strippedId = cleanId.replace(/^aegis-/, '');
  const possibleKeys = [
    `custom_image_${id}`,
    `custom_image_${cleanId}`,
    `custom_image_${strippedId}`,
    `custom_image_aegis-${strippedId}`,
    id,
    cleanId,
    strippedId,
    `custom_image_${cleanId.replace(/-/g, '_')}`,
    `custom_image_${strippedId.replace(/-/g, '_')}`,
    // Specific aliases for hero starter system bundle
    ...(cleanId.includes('starter') || cleanId.includes('bundle')
      ? ['custom_image_starter', 'custom_image_starter_bundle', 'custom_image_starter-bundle', 'custom_image_aegis_starter_bundle']
      : []),
  ];

  try {
    if (typeof sessionStorage !== 'undefined') {
      for (const key of possibleKeys) {
        const sessionVal = sessionStorage.getItem(key);
        if (sessionVal && sessionVal.trim().length > 0) {
          memoryImageStore.set(id, sessionVal);
          return sessionVal;
        }
      }
      // Scan all sessionStorage keys if direct match fails
      for (let i = 0; i < sessionStorage.length; i++) {
        const k = sessionStorage.key(i);
        if (k && (k.toLowerCase().includes(strippedId) || (strippedId.length > 3 && strippedId.includes(k.toLowerCase().replace(/^custom_image_/, ''))))) {
          const val = sessionStorage.getItem(k);
          if (val && val.trim().length > 0) {
            memoryImageStore.set(id, val);
            return val;
          }
        }
      }
    }
  } catch {}

  try {
    if (typeof localStorage !== 'undefined') {
      for (const key of possibleKeys) {
        const localVal = localStorage.getItem(key);
        if (localVal && localVal.trim().length > 0) {
          memoryImageStore.set(id, localVal);
          return localVal;
        }
      }
      // Scan all localStorage keys if direct match fails
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && (k.toLowerCase().includes(strippedId) || (strippedId.length > 3 && strippedId.includes(k.toLowerCase().replace(/^custom_image_/, ''))))) {
          const val = localStorage.getItem(k);
          if (val && val.trim().length > 0) {
            memoryImageStore.set(id, val);
            return val;
          }
        }
      }
    }
  } catch {}

  return fallback;
};

export const clearCustomImage = (id: string, defaultImage: string) => {
  memoryImageStore.delete(id);
  try {
    sessionStorage.removeItem(`custom_image_${id}`);
  } catch {}
  try {
    localStorage.removeItem(`custom_image_${id}`);
  } catch {}
  window.dispatchEvent(new CustomEvent('custom_image_update', { detail: { id, dataUrl: defaultImage } }));
};

export const useImageStore = (id: string, defaultImage: string) => {
  const [image, setImage] = useState(() => getStoredImage(id, defaultImage));

  // Keep in sync if id or defaultImage changes
  useEffect(() => {
    setImage(getStoredImage(id, defaultImage));
  }, [id, defaultImage]);

  const setCustomImage = (dataUrl: string) => {
    memoryImageStore.set(id, dataUrl);
    try {
      sessionStorage.setItem(`custom_image_${id}`, dataUrl);
    } catch {}
    try {
      localStorage.setItem(`custom_image_${id}`, dataUrl);
    } catch (e) {
      console.warn("Storage quota limit reached for localStorage. Using in-memory & session storage.", e);
    }
    setImage(dataUrl);
    window.dispatchEvent(new CustomEvent('custom_image_update', { detail: { id, dataUrl } }));
  };

  useEffect(() => {
    const handleUpdate = (e: any) => {
      if (e.detail?.id === id) {
        setImage(e.detail.dataUrl || defaultImage);
      }
    };
    window.addEventListener('custom_image_update', handleUpdate);
    return () => window.removeEventListener('custom_image_update', handleUpdate);
  }, [id, defaultImage]);

  return { image, setCustomImage };
};
