function EtatRequete({ chargement, erreur, children }) {
  if (chargement) return <p className="message">Chargement…</p>;
if (erreur) return <p className="message message-erreur" role="alert">Erreur : {erreur}</p>;
  return children;
}

export default EtatRequete;