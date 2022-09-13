import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import AllArticles from './components/AllArticles';
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
        <>
          <AllArticles 
            allArticles={allArticles}
          />
        {/* <h1>Hello World</h1> */}
          {/* <Route exact path='/'>
          </Route> */}
        </>
    </div>
  )
}

export default App;
