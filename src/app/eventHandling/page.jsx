"use client";

import React, { useState } from "react";

const EventHandling = () => {



  const num = 245;
  const num2 = 456;
  const getProd = (a, b) => {
    return a * b;
  };
  return (
    <div>
      <div className="container" py-5>
        <h1 className="text-center">Event Handling</h1>

        <hr />

        <button
          className="btn btn-primary"
          onClick={() => {
            alert("button was clicked");
          }}
        >
          Click me
        </button>
        <input
          type="text"
          onChange={(e) => {
            console.log("value changed ", e.target.value);
          }}
          className="form-control my-3"
        />
        <input
          className="form-control w-5 "
          type="color"
          onChange={(e) => {
           document.body.style.backgroundColor=e.target.value;
          }}
        />
        <h1>{num}</h1>
        <h1>{num2}</h1>
        <p>{getProd(34, 56)}</p>
      </div>
    </div>
  );
};

export default EventHandling;
