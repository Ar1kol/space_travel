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
            <li className="active" />
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

      <div
        className="flex flow"
        style={{ flexBasis: "100%", "--flow-space": "4rem" }}
      >
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

        <div
          className="flow"
          style={{ margin: "0 50vh", "--flow-space": "4rem" }}
        >
          <div className="tab-list underline-indicators flex">
            <button
              aria-selected="true"
              className=" ff-sans-cond fs-300 uppercase letter-spacing-2 text-accent bg-dark "
            >
              Moon
            </button>
            <button
              aria-selected="false"
              className=" ff-sans-cond fs-300 uppercase letter-spacing-2 text-accent bg-dark "
            >
              Mars
            </button>
            <button
              aria-selected="false"
              className=" ff-sans-cond fs-300 uppercase letter-spacing-2 text-accent bg-dark "
            >
              Europe
            </button>
          </div>

          <div className="dot-indicators flex">
            <button aria-selected="true">
              <span className="sr-only">Slide title</span>
            </button>
            <button aria-selected="false">
              <span className="sr-only">Slide title</span>
            </button>
            <button aria-selected="false">
              <span className="sr-only">Slide title</span>
            </button>
          </div>
          <div className="circle-indicators grid">
            <button className="ff-serif fs-600 uppercase" aria-selected="true">1</button>
            <button className="ff-serif fs-600 uppercase" aria-selected="false">2</button>
            <button className="ff-serif fs-600 uppercase" aria-selected="false">3</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractiveElements;
