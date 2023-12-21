import React from "react";
import TopRowMain from "./TopRowMain";
import PostsMain from "./PostsMain";
import SideBarMain from "./SideBarMain";
import CreateBubble from "./CreateBubble";

const Maincontent = ({loggedIn}) => {
  return (
    <>  
    <section>
      <div className="container-lg bg-white">
        <TopRowMain loggedIn={loggedIn}/>
        <div className="row mt-3">
            <PostsMain/>
            <SideBarMain/>
        </div>
      </div>
    </section>
    <CreateBubble/>
    </>
  );
};

export default Maincontent;
