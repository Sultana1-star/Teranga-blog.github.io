import { Link } from "react-router";

function ArticleCard({ article, estFavori, onToggleFavori }) {
  const extrait = article.body.slice(0, 100) + "…";

  return (
    <article className="article-card">
      <h3>{article.title}</h3>
      <p>{extrait}</p>
      <Link className="lien-lire" to={`/articles/${article.id}`}>
        Lire l'article →
      </Link>
      <button
        className={estFavori ? "btn btn-favori actif" : "btn btn-favori"}
        onClick={() => onToggleFavori(article)}
      >
        {estFavori ? "★ Retirer des favoris" : "☆ Ajouter aux favoris"}
      </button>
    </article>
  );
}

export default ArticleCard;