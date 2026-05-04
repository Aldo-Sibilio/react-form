import { useState } from 'react'
import ArticleCard from './components/ArticleCard.jsx';

function App() {

  const [articles, setArticles] = useState([
    {
      id: crypto.randomUUID(),
      title: "Primo articolo",
      content: "Descrizione del primo articolo",
    },
    {
      id: crypto.randomUUID(),
      title: "Secondo articolo",
      content: "Descrizione del secondo articolo",
    }
  ])

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    const newArticle = {
      id: crypto.randomUUID(),
      title: title,
      content: content
    };
    setArticles([...articles, newArticle]);
    setTitle("");
    setContent("");


  }

  return (
    <div>

      <h1>Blog</h1>

      <ul>
        {articles.map(function (article) {
          return (
            <ArticleCard
              key={article.id}
              title={article.title}
              content={article.content}
            />
          );
        })}
      </ul>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Titolo articolo"
          value={title}
          onChange={function (e) {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Contenuto articolo"
          value={content}
          onChange={function (e) {
            setContent(e.target.value);
          }}
        />

        <button type="submit">
          Aggiungi articolo
        </button>

      </form>

    </div>
  )}