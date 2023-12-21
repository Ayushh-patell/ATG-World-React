import React from "react";

const SideBarMain = () => {
    
  return (
    <div className="col-3 d-none d-md-flex flex-column">
      <div className="mb-3 row">
        <div className="col-sm-10 position-relative border-bottom border-tertiary mb-2">
          <span className="position-absolute start-0 ms-1 top-50 translate-middle-y">
            <img
              src="./images/outline-location-on-24-px-2.png"
              alt="location icon"
            />
          </span>
          <input
            type="text"
            className="w-100 mx-3 form-control-plaintext "
            id="staticEmail"
            placeholder="Enter your Location"
          />
          <span
            className="position-absolute me-1 top-50 translate-middle-y"
            style={{right: "-25px"}}
          >
            <img
              src="./images/baseline-edit-24-px.png"
              alt="edit icon"
            />
          </span>
        </div>
        <div className="info d-flex align-items-start">
          <img
            className="mx-2 mt-1"
            src="./images/baseline-error-outline-24-px.png"
            alt=""
          />
          <p className="text-secondary">
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
      </div>
      <div className="groups mt-4 d-none">
        <p>
          <img src="./images/twotone-thumb-up-24-px.png" alt="" />{" "}
          RECOMMENDED GROUPS
        </p>
        <div className="recomgrp d-flex justify-content-between my-2">
          <img src="./images/grp-1.png" alt="" />
          <span>Philosophy</span>
          <button className="btn rounded-pill bg-body-secondary btn-sm">
            Follow
          </button>
        </div>
        <div className="recomgrp d-flex justify-content-between my-2">
          <img src="./images/grp-2.png" alt="" />
          <span>MBA</span>
          <button className="btn rounded-pill bg-body-secondary btn-sm">
            Follow
          </button>
        </div>
        <div className="recomgrp d-flex justify-content-between my-2">
          <img src="./images/grp-3.png" alt="" />
          <span>Activism</span>
          <button className="btn rounded-pill bg-body-secondary btn-sm">
            Follow
          </button>
        </div>
        <div className="recomgrp d-flex justify-content-between my-2">
          <img src="./images/grp-4.png" alt="" />
          <span>Leisure</span>
          <button className="btn rounded-pill bg-body-secondary btn-sm">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBarMain;
