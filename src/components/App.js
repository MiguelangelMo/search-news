import React, { Fragment, useState, useEffect } from 'react';
import Header from './Header'
import Form from './Form'
import ListNews from './ListNews'
import '../css/App.css';

function App() {

  const [state, setstate] = useState('')
  const [news, handleNews] = useState([])

  useEffect(() => {

    const queryAPI = async () => {
      if (state.length < 1) {
        return null;
      } else {
        const key = "0bf58782ec8e441f9b05c92f336dc54c";
        const url = `http://newsapi.org/v2/top-headlines?country=ve&category=${state}&apiKey=${key}`;
        const api = await fetch(url);
        const json = await api.json();
        handleNews(json.articles)
      }
    }

    queryAPI()
  }, [state])

  return (
    <Fragment>
      <Header title="Buscador Noticias" />

      <div className="container white">
        <Form 
          title="Encuentra noticias por categoría" 
          setstate={setstate} />

        <ListNews
          news={news}/>
      </div>
    </Fragment>
  );
}



export default App;
