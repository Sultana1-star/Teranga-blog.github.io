import { Link } from "react-router";

function ArticleCard({ article, estFavori, onToggleFavori }) {
  const extrait = article.body.slice(0, 100) + "…";

  return (
    <article className="article-card">
  <h3>
    <Link to={`/articles/${article.id}`}>{article.title}</Link>
  </h3>
  <p>{extrait}</p>
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