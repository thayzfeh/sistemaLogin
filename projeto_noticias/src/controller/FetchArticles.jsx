export default function FetchArticles(lang, cat){
    return new Promise((resolve, reject) =>{
        fetch(`https://newsapi.org/v2/top-headlines?category=${cat}&country=${lang}&apiKey=d1520b395c084abdabd2a7427c3e3888`).then((res) => res.json()).then((res) => resolve(res))
    })
    
}