import { useParams, Link } from "react-router";   
import { API_URL } from "../constants";
import EtatRequete from "../components/EtatRequete";
import ListeCommentaires from "../components/ListeCommentaires";
import CommentaireForm from "../components/CommentaireForm";

function Article() {
  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [commentaires, setCommentaires] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const controleur = new AbortController();
    const options = { signal: controleur.signal };
    setChargement(true);
    setErreur(null);

    Promise.all([
      fetch(`${API_URL}/posts/${id}`, options),
      fetch(`${API_URL}/posts/${id}/comments`, options),
    ])
      .then(async ([repArticle, repComm]) => {
        if (repArticle.status === 404) throw new Error("Article introuvable");
        if (!repArticle.ok || !repComm.ok) throw new Error("Chargement impossible");
        setArticle(await repArticle.json());
        setCommentaires(await repComm.json());
        setChargement(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setErreur(err.message);
        setChargement(false);
      });

    return () => controleur.abort();
  }, [id]);

  function ajouterCommentaire(c) {
    setCommentaires((prec) => [...prec, c]);
  }

  return (
    <EtatRequete chargement={chargement} erreur={erreur}>
      {article && (
        <article className="page article-detail">
          <Link to="/articles">← Retour aux articles</Link>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
          <h2>Commentaires</h2>
          <ListeCommentaires commentaires={commentaires} />
          <CommentaireForm onAjouter={ajouterCommentaire} />
        </article>
      )}
    </EtatRequete>
  );
}

export default Article;