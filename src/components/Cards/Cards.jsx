import React from 'react';
import Card from '../Card/Card.jsx';

export default function Cards(props) {
  return (
    <div>
      {props.characters.map(char => (
        <Card
          key={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
          onClose={() => props.onClose(char.id)}
          id={char.id}
        />
      ))}
    </div>
  );
}
