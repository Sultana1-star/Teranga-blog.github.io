import { useState, useEffect } from "react";
import { API_URL } from "../constants";
import EtatRequete from "../components/EtatRequete";
import { Link } from "react-router"

function Auteurs() {
  const [auteurs, setAuteurs] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controleur = new AbortController();

    fetch(`${API_URL}/users`, { signal: controleur.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`Réponse ${r.status}`);
        return r.json();
      })
      .then((data) => {
        setAuteurs(data);
        setChargement(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setErreur(err.message);
        setChargement(false);
      });

    return () => controleur.abort();
  }, []);

  return (
    <section className="page">
      <h1 className="page-titre">Auteurs</h1>
      <EtatRequete chargement={chargement} erreur={erreur}>
        <ul className="liste-auteurs">
          {auteurs.map((a) => (
            <li key={a.id} className="auteur-item">
           <Link to={`/auteurs/${a.id}`}>
            <strong>{a.name}</strong>
              </Link>{" "}
              ({a.username}), {a.company.name}
              </li>
          ))}
        </ul>
      </EtatRequete>
    </section>
  );
}

export default Auteurs;