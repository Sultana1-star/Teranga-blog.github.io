import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { articlesTest } from "../donnees-test";

function Accueil() {
  const [favoris, setFavoris] = useState([]);

  function basculerFavori(id) {
    setFavoris((precedents) =>
      precedents.includes(id)
        ? precedents.filter((f) => f !== id)
        : [...precedents, id]
    );
  }

  return (
      <section className="page">
  <h1 className="page-titre">Bienvenue sur Teranga Blog</h1>
  <p className="compteur">Favoris : {favoris.length}</p>

      <ArticleCard
        article={articlesTest[0]}
        estFavori={favoris.includes(articlesTest[0].id)}
        onToggleFavori={basculerFavori}
      />
      <ArticleCard
        article={articlesTest[1]}
        estFavori={favoris.includes(articlesTest[1].id)}
        onToggleFavori={basculerFavori}
      />
      <ArticleCard
        article={articlesTest[2]}
        estFavori={favoris.includes(articlesTest[2].id)}
        onToggleFavori={basculerFavori}
      />
      <ArticleCard
        article={articlesTest[3]}
        estFavori={favoris.includes(articlesTest[2].id)}
        onToggleFavori={basculerFavori}
      />
    </section>
  );
}

export default Accueil;