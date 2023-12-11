import Article from "../components/Article"
import FetchArticles from "./FetchArticles"
export default function GenerateArticles(){
    FetchArticles('us','technology').then((res) =>{
        let articles = []
        for(let i = 0; i < res.articles.length; i++){
          articles.push(<Article title={res.articles[i].title} url={res.articles[i].url} image={res.articles[i].urlToImage}/>
      )}
      return articles
      })
}

