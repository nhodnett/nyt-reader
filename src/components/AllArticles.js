import React from 'react';
import Card from './Card';
import '../styles/AllArticles.css';

const AllArticles = ({ allArticles }) => {
    console.log(allArticles);

    const allArticleCards = allArticles.map((article, index) => {
        return (
            <Card 
                title={article.title}
                abstract={article.abstract}
                multimedia={article.multimedia}
                key={article.index}
            />
        )
    })

    return(
        <div className='all-articles-container'>{allArticleCards}</div>
    )    
}

export default AllArticles;