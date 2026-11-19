function ListeCommentaires({ commentaires }) {
  if (commentaires.length === 0) {
  return <p className="message">Pas encore de commentaire.</p>;
}

return (
  <ul className="commentaires">
    {commentaires.map((c) => (
      <li key={c.id} className="commentaire"></li>
     
      ))}
    </ul>
  );
}

export default ListeCommentaires;