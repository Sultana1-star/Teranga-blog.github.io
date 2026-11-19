import ArticleCard from "./ArticleCard";

function ListeArticles({ articles, favoris, onToggleFavori }) {
 if (articles.length === 0) {
  return <p className="message">Aucun article ne correspond à votre recherche.</p>;
}

return (
  <div className="liste-articles">
      {articles.map((a) => (
        <ArticleCard
          key={a.id}
          article={a}
          estFavori={favoris.some((f) => f.id === a.id)}
          onToggleFavori={onToggleFavori}
        />
      ))}
    </div>
  );
}

export default ListeArticles;