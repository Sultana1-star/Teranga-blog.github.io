# Teranga-blog.github.io

Mini-blog multipage réalisé avec React. L'application affiche des articles,
leur détail avec commentaires, les auteurs, des favoris partagés entre les
pages et un espace protégé simulé. Les données viennent de l'API publique
JSONPlaceholder.

**Adresse en ligne :** 

## Lancer le projet

    npm install
    npm run dev

Puis ouvrir l'adresse affichée dans le terminal (par défaut
http://localhost:5173).

## Fonctionnalités

- Navigation sans rechargement avec lien actif (React Router)
- Liste d'articles avec recherche par titre
- Page de détail par adresse (`/articles/:id`) avec commentaires
- Formulaire de commentaire validé (commentaires locaux)
- Favoris partagés entre les pages, compteur dans la barre
- Pages Auteurs et fiche auteur
- États de chargement et d'erreur, page 404
- Connexion simulée et route protégée « Mon espace »

## Trois choses que j'ai apprises

1. useParams renvoie toujours une chaîne
2. annuler une requête avec AbortController
3. remonter l'état dans l'ancêtre commun