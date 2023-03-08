import React, { Component } from "react";

import Header from "../parts/Header";
import landingPage from "../json/landingPage.json";
import Hero from "../parts/Hero.js";
import MostPicked from "../parts/MostPicked.js";
import Categories from "../parts/Categories.js";
import Testimony from "../parts/Testimony.js";
import Footer from "../parts/Footer.js";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial}></Testimony>
        <Footer />
      </>
    );
  }
}
