import React from "react";

const LoginModal = ({loggedIn, setloggedIn}) => {

    const accountCreate = ()=>{
        let imgA = document.createElement("img")
        let imgB = document.createElement("img")
    
        imgA.src = "./images/profile-4.png"
        imgB.src = "./images/baseline-arrow-drop-down-24-px.png"
        imgB.className = "ms-2"
        let spanA = document.createElement("span")
        spanA.textContent= "Siddharth Goyal"
        spanA.style.fontSize = "0.8rem"
        spanA.className= "ms-2 d-flex justify-content-center align-items-center"
        spanA.appendChild(imgB)
        let acc = document.createElement("p")
        acc.className = "d-flex align-items-center"
    
        acc.appendChild(imgA)
        acc.appendChild(spanA)
        document.querySelector(".create-acc").appendChild(acc)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setloggedIn(true)
        document.querySelector(".account-element").style.display = "none"
        accountCreate()
        document.querySelectorAll(".modal .btn-close").forEach(btn => {
            btn.click()
        })
    }

  return (
    <div
      className="modal fade modal-lg"
      id="login-modal"
      aria-hidden="true"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-md-success bg-opacity-10">
            <p className="text-success d-none d-md-block">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
            <button
              type="button"
              className="btn-close rounded-circle position-absolute"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <section className="vh-75">
              <div className="container py-2 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                  <div className="d-flex justify-content-between flex-md-row flex-column my-4">
                    <h3 className="fw-bold d-none d-md-block">Sign In</h3>
                    <h3 className="fw-bold d-block d-md-none">Welcome Back!</h3>
                    <p className="m-0 text-secondary ">
                      Don't have an account yet?{" "}
                      <span
                        className="fw-semibold text-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#signup-modal"
                        role="button"
                      >
                        Create new for free!
                      </span>
                    </p>
                  </div>
                  <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 col">
                    <form>
                      <div className="form-outline">
                        <input
                          type="email"
                          id="form1Example13"
                          placeholder="Email"
                          className="form-control form-control bg-light-subtle"
                        />
                      </div>

                      <div className="form-outline">
                        <input
                          type="password"
                          id="form1Example23"
                          placeholder="Password"
                          className="form-control form-control bg-light-subtle"
                        />
                      </div>

                      <div className="d-flex flex-column justify-content-around align-items-center mb-4 position-relative">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block rounded-pill w-100 my-3 account-btn"
                         onClick={handleLogin}>
                          Sign in
                        </button>

                        <a
                          className="btn btn-outline-secondary btn-block w-100 mb-2"
                          href="#!"
                          role="button"
                        >
                          <img
                            className="me-2"
                            src="./images/f-logo-rgb-blue-1024.png"
                            alt=""
                          />
                          Sign in with Facebook
                        </a>
                        <a
                          className="btn btn-outline-secondary btn-block w-100"
                          href="#!"
                          role="button"
                        >
                          <img
                            className="me-2"
                            src="./images/google.png"
                            alt=""
                          />
                          Sign in with Google
                        </a>

                        <a
                          className="btn btn-block w-100 mt-4"
                          href="#!"
                          role="button"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </form>
                  </div>

                  <div className="col-md-8 col-lg-7 col-xl-6 d-none d-md-block">
                    <img
                      src="./images/modal-img.png"
                      className="img-fluid"
                      alt="art image"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
