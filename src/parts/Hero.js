import React from "react";

import ImageHero from "../assets/images/img-hero.jpg";
import ImageHero_ from "../assets/images/img-hero-frame.jpg";
import IconCities from "../assets/images/icons/town.svg";
import IconTraveler from "../assets/images/icons/people_group.svg";
import IconTrasure from "../assets/images/icons/camera.svg";

import Button from "elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Forget Busy Work <br />
            Get Your Vacation
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments. Your money can return, unlike your
            time.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row mt-5">
            <div className="col-auto" style={{marginRight: 35}}>
              <img
                width="36"
                height="36"
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {props.data.travelers}{" "}
                <span className="text-gray-500 font-weight-light">Travelers</span>
              </h6>
            </div>
          </div>
          <div className="row mt-5" style={{marginRight: 35}}>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {props.data.cities}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconTrasure}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {props.data.treasures}{" "}
                <span className="text-gray-500 font-weight-light">Treasures</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}