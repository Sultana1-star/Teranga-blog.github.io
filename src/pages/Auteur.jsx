import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { API_URL } from "../constants";
import EtatRequete from "../components/EtatRequete";

function Auteur() {
  const { id } = useParams();

  const [auteur, setAuteur] = useState(null);
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controleur = new AbortController();
    const options = { signal: controleur.signal };
    setChargement(true);
    setErreur(null);

    Promise.all([
      fetch(`${API_URL}/users/${id}`, options),
      fetch(`${API_URL}/posts?userId=${id}`, options),
    ])
      .then(async ([repAuteur, repArticles]) => {
        if (repAuteur.status === 404) throw new Error("Auteur introuvable");
        if (!repAuteur.ok || !repArticles.ok) throw new Error("Chargement impossible");
        setAuteur(await repAuteur.json());
        setArticles(await repArticles.json());
        setChargement(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setErreur(err.message);
        setChargement(false);
      });

    return () => controleur.abort();
  }, [id]);

  return (
    <section className="page">
      <Link to="/auteurs">← Retour aux auteurs</Link>
      <EtatRequete chargement={chargement} erreur={erreur}>
        {auteur && (
          <>
            <h1 className="page-titre">{auteur.name}</h1>
            <p>
              @{auteur.username} · {auteur.email} · {auteur.phone}
            </p>
            <p>{auteur.company.name}</p>

            <h2>Articles de cet auteur</h2>
            <ul className="liste-auteurs">
              {articles.map((a) => (
                <li key={a.id} className="auteur-item">
                  <Link to={`/articles/${a.id}`}>{a.title}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </EtatRequete>
    </section>
  );
}

export default Auteur;