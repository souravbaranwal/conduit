import React, { Component } from "react";

const Loader = () => {
  return (
    <div className="columns is-centered">
      <div class="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
