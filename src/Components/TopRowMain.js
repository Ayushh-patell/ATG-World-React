import React from 'react'

const TopRowMain = ({loggedIn}) => {

    const handlejoin = (e) => {
        e.preventDefault();
        if (loggedIn) {
          e.target.innerHTML = `<span>
          <img src="./images/outline-exit-to-app-24-px.png" alt="leave icon"> Leave Group </span>`;
          e.target.className = "btn btn-outline-secondary text-secondary";
          document.querySelector(".groups").classList.toggle("d-none");
          document.querySelector(".groups").classList.toggle("d-block");
        } else {
          alert("You need to login");
        }
      };

  return (
    <>
    {/* for small devices */}
    <div className="d-md-none d-flex justify-content-between mt-4 pt-3 ">
      <div className=" fw-bold">Posts(368)</div>
      <div>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle bg-body-secondary"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter: All
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
    </div>
    {/* for larger devices */}
    <div className="d-md-flex d-none row justify-content-between border-bottom border-tertiary mt-4 p-3">
      <div className="col row justify-content-start">
        <div className="col-auto border-bottom border-secondary fw-semibold pb-2 ">
          All Posts(32)
        </div>
        <div className="col-auto pb-2 ">Article</div>
        <div className="col-auto pb-2 ">Event</div>
        <div className="col-auto pb-2 ">Education</div>
        <div className="col-auto pb-2 ">Job</div>
      </div>
      <div className="col-4 d-flex pb-2">
        <button className="btn btn-light btn-sm d-flex me-3 align-items-center">
          {" "}
          Write a Post{" "}
          <img
            src="./images/baseline-arrow-drop-down-24-px.png"
            alt="dropdown icon"
          />
        </button>
        <button className="btn btn-primary btn-sm d-flex align-items-center join-btn" onClick={handlejoin}>
          <img
            src="./images/baseline-group-add-24-px.png"
            alt="dropdown icon"
          />{" "}
          Join Group
        </button>
      </div>
    </div>
  </>
  )
}

export default TopRowMain
