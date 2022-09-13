import React from 'react';
import Card from './Card';
import { NavLink } from 'react-router-dom';
import '../styles/AllArticles.css';

const AllArticles = ({ allArticles }) => {
    console.log(allArticles);

    const allArticleCards = allArticles.map((article, index) => {
        return (
            <NavLink to={`/article/${index}`} className='card' key={index}>
                <Card 
                    title={article.title}
                    abstract={article.abstract}
                    multimedia={article.multimedia}
                />
            </NavLink>
        )
    })

    return(
        <div className='all-articles-container'>
            {allArticleCards}
        </div>
    )    
}

export default AllArticles;