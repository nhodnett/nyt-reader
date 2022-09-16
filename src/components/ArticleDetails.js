import React, { useEffect } from 'react';
import '../styles/ArticleDetails.css';

const ArticleDetails = ({ allArticles, id }) => {

    const idNum = parseInt(id)
    console.log('id', idNum)
    const selectedArticle = allArticles.find((article, index) => {
        return index === idNum
    })
    console.log('selected article', selectedArticle)

    let selectedArticleImage = selectedArticle.multimedia ? <img src={selectedArticle.multimedia[1].url} alt={selectedArticle.multimedia[1].caption} className='article-img'/> : null
    
    return (
        <div className='details-container'>
            <h3 className='details-text'>{selectedArticle.title}</h3>
            <p className='details-text'>{selectedArticle.abstract}</p>
            {selectedArticleImage}
            <p className='details-text'>{selectedArticle.byline}</p>
            <button className='link-button'>
                <a style={{textDecoration: 'none'}} href={selectedArticle.url} target="_blank">Read More</a>
            </button>
        </div>
    )
}

export default ArticleDetails;