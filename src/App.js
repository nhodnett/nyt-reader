import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import AllArticles from './components/AllArticles';
import ArticleDetails from './components/ArticleDetails';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  const [allArticles, setAllArticles] = useState([])
  const [section, setSection] = useState("home")
  const [error, setError] = useState(false)
  
  const fetchData = async () => {
    const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=aZbmpGuGlAjI4Bm8GXzuUjgm75QdNlob`
    
    try {
      const response = await fetch(url)
      const allArticles = await response.json()
        setAllArticles(allArticles.results)
        console.log(allArticles)
    } catch(error) {
      setError(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [section])

  return (
    <div className="App">
      <Nav />
        <Switch>
          <Route exact path='/'>
            <AllArticles 
              allArticles={allArticles}
            />
          </Route>
          <Route exact path='/article/:id' render={({ match }) => <ArticleDetails id={ match.params.id } allArticles={ allArticles }/>}>
          </Route>
        </Switch>
    </div>
  )
}

export default App;
