import { useState } from "react";

function CommentaireForm({ onAjouter }) {
  const [nom, setNom] = useState("");
  const [message, setMessage] = useState("");
  const [erreur, setErreur] = useState("");

  function soumettre(e) {
    e.preventDefault();

    if (nom.trim() === "") {
      setErreur("Le nom est obligatoire.");
      return;
    }
    if (message.trim().length < 10) {
      setErreur("Le message doit faire au moins 10 caractères.");
      return;
    }

    onAjouter({ id: Date.now(), name: nom.trim(), body: message.trim() });
    setNom("");
    setMessage("");
    setErreur("");
  }

  return (
    <form className="formulaire" onSubmit={soumettre}>
      <input
        className="champ"
        placeholder="Votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <textarea
        className="champ"
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {erreur && <p className="erreur-champ" role="alert">{erreur}</p>}
      <button className="btn" type="submit">Publier</button>
    </form>
  );
}

export default CommentaireForm;