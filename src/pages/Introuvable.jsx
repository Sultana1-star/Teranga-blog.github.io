import { Link } from "react-router";

function Introuvable() {
  return (
    <section className="page">
      <h1 className="page-titre">Page introuvable</h1>
      <p>Cette adresse n'existe pas.</p>
      <Link className="btn" to="/">Retour à l'accueil</Link>
    </section>
  );
}

export default Introuvable;