import { useState } from 'react'
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
