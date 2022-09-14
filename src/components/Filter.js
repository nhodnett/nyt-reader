import React from 'react';
import '../styles/Filter.css';

const Filter = ({ section, setSection }) => {

    const sections = ['Arts', 'Automobiles', 'Books', 'Business', 'Fashion', 'Food', 'Health', 'Insider', 'Magazine', 'Movies', 'NY Region', 'Obituaries', 'Opinion', 'Politics', 'Real Estate','Science', 'Sports', 'Sunday Review', 'Technology', 'Theater', 'T-Magazine', 'Travel', 'Upshot', 'US', 'World']

    const buttons = sections.map((section, index) => {
        return <button className='filter-button' key={index} onClick={() => setSection(section)}>{section}</button>
    })

    return (
        <section className='filter-buttons-container'>{buttons}</section>
    )
}

export default Filter;