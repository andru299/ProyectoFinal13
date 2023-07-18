import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button, Header, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=8&name=${filter}`);
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Container textAlign="center">
      <Header as="h1" style={{ fontSize: "50px", color: "red", marginBottom: "20px" }}>
        Buscador de personas
      </Header>
      <div>
        <h2
          style={{
            fontSize: "30px",
            marginBottom: "10px",
            background: "linear-gradient(to right, #4e54c8, #8f94fb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Aquí encontrarás nuevas amistades
        </h2>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Ingrese un criterio de filtrado"
        />
        <Card.Group itemsPerRow={3}>
          {characters.map((character) => (
            <Card
              key={character.login.uuid}
              style={{
                width: "250px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "20px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Link to={`/detalle/${character.login.uuid}`}>
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginBottom: "10px",
                  }}
                >
                  <Image src={character.picture.large} alt="Character" size="medium" />
                </div>
                <Card.Content>
                  <Card.Header style={{ fontSize: "16px", fontWeight: "bold" }}>
                    {character.name.first} {character.name.last}
                  </Card.Header>
                  <Card.Description>Email: {character.email}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button primary>Selecciona</Button>
                </Card.Content>
              </Link>
            </Card>
          ))}
        </Card.Group>
        <Link to="/login">
          <Button primary>Home</Button>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
