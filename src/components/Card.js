import React from 'react';

const Card = ({ title, abstract, multimedia }) => {

    let images = multimedia ? <img src={multimedia[1].url} alt={multimedia[1].caption} className='article-img'/> : null

    return(
        <article>
            <h3 className='card-text'>{title}</h3>
            {images}
            <p className='card-text'>{abstract}</p>
        </article>
    )
}

export default Card;