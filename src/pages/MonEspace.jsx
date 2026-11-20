import { Navigate, useOutletContext } from "react-router";

function MonEspace() {
  const { connecte, deconnecter, favoris } = useOutletContext();

  if (!connecte) {
    return <Navigate to="/connexion" replace />;
  }

  return (
    <section className="page">
      <h1 className="page-titre">Mon espace</h1>
      <p>Bienvenue ! Vous avez {favoris.length} article(s) en favori.</p>
      <button className="btn" onClick={deconnecter}>
        Se déconnecter
      </button>
    </section>
  );
}

export default MonEspace;