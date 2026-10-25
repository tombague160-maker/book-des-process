# Book des Process · Séréo

Application interne : procédures, « Ma journée », formation, demandes et administration.

- Toute l'application tient dans `index.html` (pas de compilation).
- Les données (procédures, comptes, tâches) sont dans Supabase et protégées par des règles d'accès : ce dépôt ne contient que l'interface et la clé publique.
- Mise en ligne : GitHub Pages, branche `main`, dossier racine.

## Branche `prochaine-version` (pas en ligne)

Cette branche contient la prochaine version : accusés de lecture, annuaire, statistiques, impression PDF, réactions et commentaires, consultation sans internet (`sw.js`), et l'interface simplifiée (une seule barre « Rechercher ou poser une question », page « Besoin d'aide ? », administration en 4 onglets). **Elle n'est pas en ligne** : le site publie uniquement la branche `main`.

Pour la mettre en ligne :
1. Faire une sauvegarde, puis exécuter dans Supabase le script `7-lectures-annuaire-stats.sql` (projet privé `book-des-process-complet`). Les scripts 5 et 6 sont déjà exécutés.
2. Fusionner cette branche dans `main` (`index.html` et `sw.js`).
