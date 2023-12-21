import React from "react";

const Navbar = () => {
  return (
    <nav>
      {/* nav for larger device  */}
      <div className=" row justify-content-around align-items-center py-3 d-md-flex d-none">
        <div className="logo col-2">
          <img
            className="object-fit-contain"
            src="./images/whole.png"
            alt="Logo"
          />
        </div>
        <div className="search col-5 bg-light rounded-pill overflow-hidden px-2 row align-items-center">
          <span className="col-1">
            <img
              src="./images/baseline-search-24-px.png"
              alt="search icon"
            />
          </span>
          <input
            type="text"
            className="col-11 bg-transparent border-0"
            id="search-input"
            placeholder="Search your favourite groups in ATG"
          />
        </div>
        <div className="create-acc col-2">
          <p className="m-0 account-element">
            Create account.{" "}
            <span
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#login-modal"
              className="fw-semibold text-primary"
            >
              It's free!
            </span>
            <span aria-hidden="true">
              <img
                src="./images/baseline-arrow-drop-down-24-px.png"
                alt="dropdown icon"
              />
            </span>
          </p>
        </div>
      </div>
      {/* nav for smaller device  */}
      <div className="row d-flex d-md-none justify-content-end p-2">
        <svg
          className="w-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="10"
          viewBox="0 0 51 10"
          fill="none"
        >
          <path d="M0 -0.00012207H10V9.99988H0V-0.00012207Z" fill="#868E96" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26 9.99988C28.7614 9.99988 31 7.7613 31 4.99988C31 2.23845 28.7614 -0.00012207 26 -0.00012207C23.2386 -0.00012207 21 2.23845 21 4.99988C21 7.7613 23.2386 9.99988 26 9.99988Z"
            fill="#868E96"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39 -0.00012207H51L45 9.99988L39 -0.00012207Z"
            fill="#868E96"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
