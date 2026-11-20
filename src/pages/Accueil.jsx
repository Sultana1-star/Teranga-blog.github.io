import { Link } from "react-router";

function Accueil() {
  return (
    <section className="page">
      <div className="hero">
        <img
          className="hero-logo"
          src="/logo-teranga-blog.png"
          alt="Logo Teranga Blog"
        />
        <h1 className="page-titre">Bienvenue sur Teranga Blog</h1>
        <p className="hero-texte">
          Un espace pour lire, partager et garder vos articles préférés.
          Découvrez les auteurs, commentez et gardez vos favoris.
        </p>
        <div className="hero-actions">
          <Link className="btn" to="/articles">
            Parcourir les articles
          </Link>
          <Link className="btn btn-contour" to="/auteurs">
            Découvrir les auteurs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Accueil;