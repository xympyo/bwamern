import React from "react";
import Slide from "react-reveal";

import TestimonyAccent from "../assets/images/testimonial-landingpages-frame.jpg";
import Star from "elements/Star";
import Button from "elements/Button";

export default function Testimony({ data }) {
  return (
    <section className="container">
      <Slide direction="down">
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 50 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={TestimonyAccent}
                alt="Testimonial Frame"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px` }}
              />
            </div>
          </div>
          <div className="col">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={40} height={35} spacing={5} />
            <h5 className="h3 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Story
              </Button>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}
