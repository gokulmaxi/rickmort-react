import { Component, Fragment } from 'react';

const Character = (props) => (
  <Fragment>
    <img src={props.character.image} alt={props.character.name} />
    <div>
      <h3>{props.character.name}</h3>
      <p>
        <strong>Status:</strong> {props.character.status}
      </p>
      <p>
        <strong>Species:</strong> {props.character.species}
      </p>
      <p>
        <strong>Location:</strong> {props.character.location.name}
      </p>
    </div>
  </Fragment>

);

export default Character;
