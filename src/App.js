import React, { useState, useEffect} from 'react';
import { EpisodeList } from './components/EpisodeList';
import logo from './asset/Rick_and_Morty_logo.png';
import axios from 'axios';
import { Card } from './components/Card';

function App() {
  const [fetched, setFetched] = useState(false);
  const [error, setError] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [term, setTerm] = useState('');

  let fetchEpisode = async () => {
    axios(`https://rickandmortyapi.com/api/episode/${term}`)
    .then(res => {
      setError('');
      setFetched(true);
      setSearchResult(() => res.data);
    }).catch(err => {
      setError('Episode not found!!');
      setSearchResult([]);
    })
  }

  useEffect(() => {
      if(term != '')
        fetchEpisode();
      else{
        setFetched(false);
      }
  }, [term])

  return(
    <div className="container-md">
      <div className="d-flex justify-content-between">
            <a className="navbar-brand" href="/">
                <img src={logo} width="250" alt="logo" />
            </a>
            <form onSubmit={(e) => {e.preventDefault(); fetchEpisode();}} className="form-inline my-2 my-lg-0">
                <input 
                onChange={(e) => setTerm(e.target.value)}
                className="form-control mr-sm-2" 
                placeholder="Search episodes..." 
                aria-label="Search" 
                />
            </form>
      </div>
      { !fetched ? <EpisodeList /> : (error ? <h3 className="mt-5">{error}</h3> : <Card key={searchResult.id} episode={searchResult} />)}
    </div>
  )
}

export default App;
