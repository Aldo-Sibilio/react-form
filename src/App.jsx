import { useState } from 'react'

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

  
}}