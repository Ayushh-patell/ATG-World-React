import React from "react";
import { PostData } from "../Data/PostData";

const PostsMain = () => {
  return (
    <div className="col mx-md-4">
       { PostData.map((Post, idx)=> (
        <div key={idx} className="card mb-2">
     { Post.img && <img src={Post.img} className="card-img-top" alt="..." />}
      <div className="card-body card-text">
        <p className="type text-start">{Post.type}</p>
        <div className="d-flex justify-content-between">
          <p className="me-3 fs-5 fw-bold mb-0">
            {Post.head}
          </p>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="./images/baseline-more-vert-24-px.png" alt="" />
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


        {Post.sectext && <p className="text-secondary fw-light">
          {Post.sectext}
        </p>}

       {Post.location && <div className="meetup">
          <div className="d-flex justify-content-between">
            <span className="fw-semibold">
              <img
                src={Post["text-1"].img}
                alt=""
              />
            {Post["text-1"].text}
            </span>
            <span className="fw-semibold">
              <img
                src="./images/outline-location-on-24-px-2.png"
                alt=""
              />
              {Post["text-2"]}
            </span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
          <button className={`btn w-100 fw-semibold btn-outline-light my-3 ${Post.btn}`}>
            {Post["btn-text"]}
          </button>
        </div>}

        <div className="row justify-content-between">
          <img
            className="col-2"
            style={{objectFit: "contain", maxWidth: "60px"}}
            src={Post.profpic}
            alt=""
          />
          <div className="col d-flex flex-md-row flex-column justify-content-md-between align-items-center">
            <span className="m-0 fw-semibold">{Post.name}</span>
            <div>
              <img
                src="./images/icon-action-visibility-24-px.png"
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
              <img src="./images/baseline-share-24-px.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
        ))}
    </div>
  );
};

export default PostsMain;
