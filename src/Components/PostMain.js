import React from "react";

const PostMain = () => {
  return (
    <div className="card mb-2">
      {/* lfdsalf */}
      <img src="./public/images/card-1.png" className="card-img-top" alt="..." />
      {/* jffjdfdsk */}
      <div className="card-body card-text">
        <p className="type text-start">✍️ Article</p>
        <div className="d-flex justify-content-between">
          <p className="me-3 fs-5 fw-bold mb-0">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </p>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="./public/images/baseline-more-vert-24-px.png" alt="" />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* dfkfds */}
        <p className="text-secondary fw-light">
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </p>
        {/* sndl */}
        <div className="meetup">
          <div className="d-flex justify-content-between">
            <span className="fw-semibold">
              <img
                src="./public/images/outline-work-outline-24-px.png"
                alt=""
              />
              Innovaccer Analytics Private Ltd.
            </span>
            <span className="fw-semibold">
              <img
                src="./public/images/outline-location-on-24-px-2.png"
                alt=""
              />
              Noida, India
            </span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
          <button className="btn w-100 fw-semibold btn-outline-light my-3 btn-cyan">
            Apply on Timesjob
          </button>
        </div>
        {/* fdsfnds */}

        <div className="row justify-content-between">
          <img
            className="col-2"
            style={{objectFit: "contain", maxWidth: "60px"}}
            src="./public/images/profile-1.png"
            alt=""
          />
          <div className="col d-flex flex-md-row flex-column justify-content-md-between align-items-center">
            <span className="m-0 fw-semibold">Sarthak Kamra</span>
            <div>
              <img
                src="./public/images/icon-action-visibility-24-px.png"
                alt=""
              />
              <span className="text-secondary">1.4k views</span>
            </div>
          </div>
          <div className="col-md-2 col-2 d-flex justify-content-between">
            <button
              style={{height: "fit-content", padding: "0.2rem"}}
              className="btn-tertiary border-0 rounded-sm"
            >
              <img src="./public/images/baseline-share-24-px.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMain;
