import { Link } from "react-router";

function Accueil() {
  return (
    <section className="page">
      <h1 className="page-titre">Bienvenue sur Teranga Blog</h1>
      <p>
        Lisez les articles, découvrez leurs auteurs, commentez et gardez vos
        favoris.
      </p>
      <Link className="btn" to="/articles">Voir les articles</Link>
    </section>
  );
}

export default Accueil;