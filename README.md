# Nettoyage Solaire Aveyron — V2 allégée

Site statique sans framework : **aucun build n'est nécessaire**.

## Fichiers
- `index.html` : page d'accueil
- `styles.css` : design responsive
- `script.js` : menu mobile + formulaire WhatsApp
- `mentions-legales.html`
- `confidentialite.html`
- `robots.txt`
- `assets/logo.svg` et `assets/favicon.svg`

## À vérifier avant mise en ligne définitive
1. Confirmer que le **06 78 58 03 34** est bien le numéro utilisé pour WhatsApp.
2. Remplacer les visuels de démonstration de la section **Réalisations** par de vraies photos.
3. Compléter les mentions légales : raison sociale exacte, forme juridique, SIRET/SIREN, TVA, e-mail professionnel et hébergeur.
4. Dès que le nom de domaine définitif est connu :
   - ajouter une balise `canonical`,
   - ajouter `og:url`,
   - créer `sitemap.xml`,
   - ajouter le domaine dans le JSON-LD,
   - déclarer le sitemap dans Google Search Console.
5. Vérifier/mettre à jour la note Google affichée si elle évolue.

## Formulaire
Le formulaire ne stocke aucune donnée sur le site. Il prépare un message WhatsApp vers le numéro configuré dans `script.js`.

## Mise en ligne
Le site peut être hébergé comme site statique (Netlify, Cloudflare Pages, GitHub Pages, etc.) ou importé dans Bolt uniquement pour l'aperçu/édition.


## V2
Page d'accueil simplifiée : moins de texte, suppression de la FAQ et du bloc technique détaillé, priorité aux services, preuves, réalisations et devis.
