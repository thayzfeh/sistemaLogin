export default function Article(props){
    return(
        <>
        <article className="article">
            <img src={props.image} alt="bucetao" className="article"/>
            <h2><a href={props.url}>{props.title}</a></h2>

        </article>
        </>
    )
}