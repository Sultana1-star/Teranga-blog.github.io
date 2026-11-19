import { Link, useOutletContext } from "react-router";
import ListeArticles from "../components/ListeArticles";

function Favoris() {
  const { favoris, basculerFavori } = useOutletContext();

  return (
    <section className="page">
      <h1 className="page-titre">Mes favoris</h1>
      {favoris.length === 0 ? (
        <p className="message">
          Aucun favori pour l'instant. <Link to="/articles">Parcourir les articles</Link>
        </p>
      ) : (
        <ListeArticles
          articles={favoris}
          favoris={favoris}
          onToggleFavori={basculerFavori}
        />
      )}
    </section>
  );
}

export default Favoris;