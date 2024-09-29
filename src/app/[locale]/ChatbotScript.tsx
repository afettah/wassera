'use client'; // This makes the component client-side

import { useEffect } from 'react';

export default function ChatbotScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/naix66c8loj2zaxbkz2yq9bes3tl9ve0.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
