
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)


// CMS = Content Management System
// Traz tanto o painel de ADMIN tanto quanto a parte visual do front-end (Temas)

//Headless CMS (graphCMS): Painel de ADMIN (dados fornecidos através de uma API REST ou GraphQL)
// React que consome essa API do CMS

// Query  = buscar dados 
// Mutation = criar, alterar ou deletar dados