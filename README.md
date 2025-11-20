# marie-anne-sevin

[![Netlify Status](https://api.netlify.com/api/v1/badges/1c1ec13b-4b40-49a7-82fa-875b7959c943/deploy-status)](https://app.netlify.com/sites/marie-anne-sevin/deploys)

[Google search console](https://search.google.com/search-console?resource_id=sc-domain%3Amarie-anne-sevin.com)

[Google Analytics](https://analytics.google.com/analytics/web/#/p352368413/reports/reportinghub?params=_u..nav%3Dmaui)

## CSP (Content Security Policy)

- [Google’s CSP Evaluator test site](https://csp-evaluator.withgoogle.com/)

- [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory)

## Self-hosting fonts

[google-webfonts-helper](https://gwfh.mranftl.com/fonts)

[google-webfonts-helper Github](https://github.com/majodev/google-webfonts-helper)

1. Rechercher : Montserrat Playfair+Display et Raleway
2. Sélectionner les poids : 400, 500, 600, 700, 800, 900
3. Sélectionner `Modern Browsers` in `Copy CSS` section
4. Clique sur “Download” → tu obtiens un .zip contenant :
    - les fichiers .woff2
    - un CSS pré-écrit

5. Tout dézipper dans le dossier `public/fonts`
6. Puis faire l'import du fichier `fonts.css` dans `main.tsx`
