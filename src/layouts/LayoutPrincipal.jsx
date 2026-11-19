import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

function LayoutPrincipal() {
  const [favoris, setFavoris] = useState([]); // tableau d'articles

  function basculerFavori(article) {
    setFavoris((prec) =>
      prec.some((f) => f.id === article.id)
        ? prec.filter((f) => f.id !== article.id)
        : [...prec, article]
    );
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo-texte">Teranga Blog</Link>
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/auteurs">Auteurs</NavLink>
        <NavLink to="/favoris">
          Favoris <span className="badge">{favoris.length}</span>
        </NavLink>
      </nav>

      <main>
        <Outlet context={{ favoris, basculerFavori }} />
      </main>
    </>
  );
}

export default LayoutPrincipal;