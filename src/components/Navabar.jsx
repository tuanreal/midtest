import React from "react";

const Navabar = () => {
  return (
    <div className="flex layout-nav items-center">
      <h1>
        <a href="">Anonime</a>
      </h1>
      <p>Home</p>
      <p>List anime</p>
      <input type="text" placeholder="Search anime or movie" />
    </div>
  );
};

export default Navabar;
