# Book des Process · Séréo

Application interne : procédures, « Ma journée », formation, demandes et administration.

- Toute l'application tient dans `index.html` (pas de compilation).
- Les données (procédures, comptes, tâches) sont dans Supabase et protégées par des règles d'accès : ce dépôt ne contient que l'interface et la clé publique.
- Mise en ligne : GitHub Pages, branche `main`, dossier racine.

## Version en ligne (26 octobre 2026)

`main` contient la version complète : accusés de lecture, annuaire, statistiques, impression PDF, réactions et commentaires, consultation sans internet (`sw.js`), interface simplifiée, accompagnement dans les procédures, illustrations des thèmes (`img/themes/`) et captures Ximi masquées (`img/ximi/`). Le script de base n° 7 est exécuté.

Tout serveur qui reprend ce dépôt doit publier **tous** les fichiers de `main` (pas seulement `index.html`) : `sw.js`, `img/`, `fonts/`, icônes et `manifest.webmanifest`.
