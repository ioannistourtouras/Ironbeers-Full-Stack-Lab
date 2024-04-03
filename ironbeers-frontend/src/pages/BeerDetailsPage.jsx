import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [oneBeer, setOneBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/beers/${beerId}`)
      .then((singleBeer) => {
        console.log(singleBeer);
        setOneBeer(singleBeer.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (oneBeer === null) {
    return (
      <div id="AllBeers" className="fullpage">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <img src={oneBeer.img_url} alt="beer img" />
      <h1>{oneBeer.name}</h1>
      <span>{oneBeer.attenuation_level}</span>
      <h3>{oneBeer.tagline}</h3>
      <p>{oneBeer.contributed_by}</p>
      <p>{oneBeer.is_alchoholic}</p>
    </div>
  );
}

export default BeerDetailsPage;
