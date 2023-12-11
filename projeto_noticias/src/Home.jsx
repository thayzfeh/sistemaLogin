import { useEffect, useState } from 'react'
import Article from './components/Article'
import './css/home.css'
import FetchArticles from './controller/FetchArticles'
import GenerateArticles from './controller/GenerateArticles'

export default function Home() {
  const articles = GenerateArticles();
  const getArticles = () => articles;
  return (
    <>
      <main>
        <h1>Based in your interests:</h1>
        {getArticles()}
        
      </main>
    </>
  )
}

