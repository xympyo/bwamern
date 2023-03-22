import React from "react";
import Fade from "react-reveal/Fade";
import CompletedIllustration from "../../assets/images/completed.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col">
            <img
              src={CompletedIllustration}
              className="img-fluid"
              alt="You have completed your checkout"
            />
            <p className="text-gray-500">
              We will inform you via email as soon as possible once the
              transaction has been accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
