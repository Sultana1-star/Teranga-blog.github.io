import { Navigate, useOutletContext } from "react-router";

function Connexion() {
  const { connecte, connecter } = useOutletContext();

  if (connecte) {
    return <Navigate to="/mon-espace" replace />;
  }

  return (
    <section className="page">
      <h1 className="page-titre">Connexion</h1>
      <p>La connexion est simulée : un clic suffit.</p>
      <button className="btn" onClick={connecter}>
        Se connecter
      </button>
    </section>
  );
}

export default Connexion;