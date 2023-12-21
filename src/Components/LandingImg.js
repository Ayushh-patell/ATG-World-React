import React from 'react'

const LandingImg = () => {
  return (
    <section className=" bg-black position-relative h-25">
            <div className="position-absolute top-0 start-0 end-0 d-md-none d-flex justify-content-between p-3" style={{zIndex:"2"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="white" />
                </svg>
                <button data-bs-toggle="modal" data-bs-target="#login-modal" className="btn btn-outline-light">Join Group</button>
            </div>
            <img className=" opacity-50 main-image" src="./images/group-main.jpg" alt="group image"/>
            <div className="text position-absolute bottom-0 mb-5 start-0 ms-2 text-white ms-md-5">
                <h3 className="fw-bold ">Computer Engineering</h3>
                <p className="fw-light">142,756 Computer Engineers follow this</p>
            </div>
        </section>
  )
}

export default LandingImg
