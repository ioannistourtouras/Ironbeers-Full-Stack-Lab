import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    const urlAPI = "http://localhost:5005/api/beers";

    axios
      .get(urlAPI)
      .then((beersFromAPI) => {
        console.log(beersFromAPI);
        setBeers(beersFromAPI.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (beers === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {beers.map((beer, index) => {
        return (
          <div key={index}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt="" />
              <h1>{beer.name}</h1>
              <h3>{beer.tagline}</h3>
              <span>Created by: </span>
              <span>{beer.contributed_by}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;

// I replaced const API_URL = 'https://localhost:8000'by const API_URL = "http://localhost:8000";
// By default you cannot call localhost request on browsers but you can disable the security
