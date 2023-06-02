import { Component, useEffect, useState } from 'react';
import "./RickMorty.css"
const RickMorty = (props) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacters();
  }, []);
  return (
    <div className='container'>
      <h1>Rick and Morty Characters</h1>
      <div className="character-list">
        {characters.map((character) => (

          <div className="character-card">
            <img src={character.image} alt={character.name} />
            <div>
              <h3>{character.name}</h3>
              <p>
                <strong>Status:</strong> {character.status}
              </p>
              <p>
                <strong>Species:</strong> {character.species}
              </p>
              <p>
                <strong>Location:</strong> {character.location.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RickMorty;
