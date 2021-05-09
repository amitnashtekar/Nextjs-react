import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id={1234}
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            price={19.2}
            imageurl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg"
            rating={3}
          />
          <Product
            id={458}
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            price={19.2}
            imageurl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={6874}
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            price={19.2}
            imageurl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg"
            rating={3}
          />
          <Product
            id={2949}
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            price={19.2}
            imageurl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg"
            rating={3}
          />
          <Product
            id={9940}
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            price={19.2}
            imageurl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={301467}
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            price={19.2}
            imageurl="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
