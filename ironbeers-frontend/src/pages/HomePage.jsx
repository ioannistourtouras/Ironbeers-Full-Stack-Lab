import React from "react";
import { Link } from "react-router-dom";
import beers from "../../../assets/beers.png";
import random_beer from '../../../assets/random-beer.png'
import new_beer from '../../../assets/new-beer.png'

function HomePage() {
  return (
    <>
      <Link to={"/beers"}>
        <img src={beers} alt="All Beers image" />
        <h1>All Beers</h1>
      </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam eu lectus feugiat lacinia. Vivamus eu ex sed mi pretium porttitor quis nec quam. Aliquam tempor orci in volutpat tempor. Nunc pellentesque neque id gravida ultrices. Pellentesque ut mauris non dolor auctor finibus in id
        tortor. Nam feugiat, metus ut rhoncus accumsan, metus sem mollis sapien, vel sodales ex eros sit amet enim.
      </p>
      <Link to={"/random-beer"}>
        <img src={random_beer} alt="random beer img" />
        <h1>Random Beer</h1>
      </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam eu lectus feugiat lacinia. Vivamus eu ex sed mi pretium porttitor quis nec quam. Aliquam tempor orci in volutpat tempor. Nunc pellentesque neque id gravida ultrices. Pellentesque ut mauris non dolor auctor finibus in id
        tortor. Nam feugiat, metus ut rhoncus accumsan, metus sem mollis sapien, vel sodales ex eros sit amet enim.
      </p>
      <Link to={'/new-beer'}>
        <img src={new_beer} alt="new beer img" />
        <h1>New Beer</h1>
      </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam eu lectus feugiat lacinia. Vivamus eu ex sed mi pretium porttitor quis nec quam. Aliquam tempor orci in volutpat tempor. Nunc pellentesque neque id gravida ultrices. Pellentesque ut mauris non dolor auctor finibus in id
        tortor. Nam feugiat, metus ut rhoncus accumsan, metus sem mollis sapien, vel sodales ex eros sit amet enim.
      </p>
    </>
  );
}

export default HomePage;
