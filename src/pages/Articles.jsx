import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import { API_URL } from "../constants";
import BarreRecherche from "../components/BarreRecherche";
import ListeArticles from "../components/ListeArticles";
import EtatRequete from "../components/EtatRequete";

function Articles() {
  const { favoris, basculerFavori } = useOutletContext();

  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [recherche, setRecherche] = useState("");

  useEffect(() => {
    const controleur = new AbortController();
    setChargement(true);
    setErreur(null);

    fetch(`${API_URL}/posts?_limit=12`, { signal: controleur.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`Réponse ${r.status}`);
        return r.json();
      })
      .then((data) => {
        setArticles(data);
        setChargement(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setErreur(err.message);
        setChargement(false);
      });

    return () => controleur.abort();
  }, []);

  const articlesFiltres = articles.filter((a) =>
    a.title.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <section className="page">
      <h1 className="page-titre">Articles</h1>
      <BarreRecherche valeur={recherche} onChange={setRecherche} />
      <EtatRequete chargement={chargement} erreur={erreur}>
        <ListeArticles
          articles={articlesFiltres}
          favoris={favoris}
          onToggleFavori={basculerFavori}
        />
      </EtatRequete>
    </section>
  );
}

export default Articles;