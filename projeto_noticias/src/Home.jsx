import { useEffect, useState } from 'react'
import Article from './components/Article'
import './css/home.css'
import Header from './components/Header';
import axios from "axios";
import {useQuery} from 'react-query'

export default function Home(props) {
  const {data, isLoading} = useQuery("articles", () => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=d1520b395c084abdabd2a7427c3e3888`).then((response) => response.data.articles);
  })
  if(isLoading){
    return <div className='Loading'>Carregando...</div>
  }
  return (
    <>
      <Header name={props.user} onLogout={props.onLogout}/>
      <main>
        <h1>News for you:</h1>
        {data.map((article) =>{
          if(article.title !="[Removed]"){
            return <Article title={article.title} url={article.url} image={article.urlToImage} key={article.url}/>
          }
        })}
        
      </main>
    </>
  )
}

