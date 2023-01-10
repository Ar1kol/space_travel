import React from "react";

const InteractiveElements = () => {
  return (
    <>
      <h2 className="numbered-title">
        <span>03</span> Interactive elements
      </h2>

      <div>
        <nav>
          <ul className="primary-navgation underline-indicators flex ">
            <li className="active"/>
            <a
              href="#"
              className="ff-sans-cond fs-300 uppercase letter-spacing-2 text-white"
            >
              <span>01</span> active
            </a>
            <li className="active" />
            <a
              href="#"
              className="ff-sans-cond fs-300 uppercase letter-spacing-2 text-white"
            >
              <span>02</span> hovered
            </a>
            <li className="active" />
            <a
              href="#"
              className="ff-sans-cond fs-300 uppercase letter-spacing-2 text-white"
            >
              <span>03</span> idle
            </a>
          </ul>
        </nav>
      </div>

      <div className="flex">
        <div style={{ marginTop: "5rem" }}>
          <a
            href="#"
            className="large-button ff-serif fs-600 uppercase text-dark bg-white"
          >
            Explore
          </a>
          <a
            href="#"
            className="large-button-glowing ff-serif fs-600 uppercase text-dark bg-white"
          >
            Explore
          </a>
        </div>

        <div style={{ marginBottom: "50vh" }}></div>
      </div>
    </>
  );
};

export default InteractiveElements;
