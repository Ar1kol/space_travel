import React from 'react'
import { Link } from "react-router-dom";

// CSS
// .flex {
//     display: flex;
//     gap: var(--gap, 1rem);
//   }
  
//   .flex.even-columns > * {
//     width: 100%;
//     border: 5px solid limegreen;
//   }



const HomeFlex = () => {
  return (
    <div className="flex container even-columns" style={{ maxWidth: "60rem" }}>
      <div>
        <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
          So, you want to travel to
          <span className="d-block fs-900 ff-serif text-white">Space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
      >
        <Link
          to="/"
          className="large-button ff-serif fs-600 uppercase text-dark bg-white"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}

export default HomeFlex