# Book des Process · Séréo

Application interne : procédures, « Ma journée », formation, demandes et administration.

- Toute l'application tient dans `index.html` (pas de compilation).
- Les données (procédures, comptes, tâches) sont dans Supabase et protégées par des règles d'accès : ce dépôt ne contient que l'interface et la clé publique.
- Mise en ligne : GitHub Pages, branche `main`, dossier racine.

## Branche `prochaine-version` (pas en ligne)

Cette branche contient la prochaine version de l'application : Actualités, Mes notes, données personnelles synchronisées et gestion des collaborateurs. **Elle n'est pas en ligne** : le site publie uniquement la branche `main`.

Pour la mettre en ligne :
1. Exécuter dans Supabase les scripts `5-actualites.sql` et `6-notes-et-donnees-perso.sql` (ils sont dans le projet privé `book-des-process-complet`).
2. Fusionner cette branche dans `main`.
