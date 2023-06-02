import { Component, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Character from './Character';
import "./RickMorty.css"
const RickMorty = (props) => {
  const [characters, setCharacters] = useState([]);
  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const { data, status } = useQuery("chaaraters", fetchCharacters)
  return (
    <div className='container'>
      <h1>Rick and Morty Characters</h1>
      {status === "error" && (
        <div>
          <h1>Error</h1>
        </div>
      )}
      {status === "loading" && (
        <div>
          <h1>Fetching Data</h1>
        </div>
      )}
      <div className="character-list">
        {characters.map((character) => (
          <div className="character-card">
            <Character character={character} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RickMorty;
