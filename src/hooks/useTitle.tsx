import { useEffect } from 'react';
export const useTitle = (htmlPageTitle: string) => {
  useEffect(() => {
    const previousTitle = document?.title;
    if (document) {
      document.title = htmlPageTitle;
    }

    return () => {
      if (document) {
        document.title = previousTitle;
      }
    };
  }, [htmlPageTitle]);
};
