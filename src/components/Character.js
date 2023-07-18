import React from "react";

function Character({ character }) {
  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Character</h2>
      {character.map((person, index) => (
        <div key={index}>
          <h3>{person.name.first} {person.name.last}</h3>
          <p>{person.email}</p>
          {/* Mostrar más detalles del personaje */}
        </div>
      ))}
    </div>
  );
}

export default Character;
