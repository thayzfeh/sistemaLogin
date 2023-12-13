import DefaultImage from '../images/Default.png'

export default function Article(props){
    const src = () => {if(props.image){
        return props.image;
    }else{
        return DefaultImage;
    }
    }
    
    
    return(
        <>
        <article className="article">
            <img src={src()} alt="bucetao" className="article"/>
            <h2><a href={props.url} target='_blank'>{props.title}</a></h2>

        </article>
        </>
    )
}