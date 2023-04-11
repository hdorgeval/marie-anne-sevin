import { useEffect } from 'react';
export const useMetaDescription = (description: string) => {
  useEffect(() => {
    if (!document || !description || !document.head) {
      return;
    }

    const head = document.head as HTMLElement;
    const metaTag = head.querySelector('meta[name="description"]') as HTMLMetaElement | null;

    if (metaTag) {
      metaTag.content = description;
      return;
    }

    const newMetaTag = document.createElement('meta') as HTMLMetaElement;
    newMetaTag.name = 'description';
    newMetaTag.content = description;

    head.appendChild(newMetaTag);
  }, [description]);
};
