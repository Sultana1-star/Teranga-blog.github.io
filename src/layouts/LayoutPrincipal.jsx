import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

function LayoutPrincipal() {
  const [favoris, setFavoris] = useState([]); // tableau d'articles
  const [connecte, setConnecte] = useState(false); // connexion simulée

  function basculerFavori(article) {
    setFavoris((prec) =>
      prec.some((f) => f.id === article.id)
        ? prec.filter((f) => f.id !== article.id)
        : [...prec, article]
    );
  }

  function connecter() {
    setConnecte(true);
  }

  function deconnecter() {
    setConnecte(false);
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo-lien">
          <img
            className="logo"
            src="/logo-teranga-blog.png"
            alt="Teranga Blog, retour à l'accueil"
          />
        </Link>
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/auteurs">Auteurs</NavLink>
        <NavLink to="/favoris">
          Favoris <span className="badge">{favoris.length}</span>
        </NavLink>
        <NavLink to="/mon-espace">Mon espace</NavLink>
        {!connecte && <NavLink to="/connexion">Connexion</NavLink>}
      </nav>

      <main>
        <Outlet
          context={{
            favoris,
            basculerFavori,
            connecte,
            connecter,
            deconnecter,
          }}
        />
      </main>
    </>
  );
}

export default LayoutPrincipal;