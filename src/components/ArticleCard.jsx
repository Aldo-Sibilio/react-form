function ArticleCard({ title, content }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{content}</p>
      <hr />
    </li>
  );
}

export default ArticleCard;