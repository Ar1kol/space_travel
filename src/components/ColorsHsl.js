import React from "react";

const ColorsHsl = () => {
  return (
    <div>
      <div
        className="bg-accent"
        // style={{
        //   padding: "1rem",
        //   backgroundColor: "hsl(var(--clr-light))",
        //   "--clr-light": "204, 100%, 75%",
        // }}
      >
        <p className="text-dark">light blue bg, white dark text</p>
      </div>
      <div className="bg-white text-dark" style={{ padding: "1rem" }}>
        <p>white bg, with dark text</p>
      </div>
      <div
        className="text-white"
        style={{
          padding: "1rem",
          backgroundColor: "hsl(var(--clr-light) / .2)",
        }}
      >
        <p>light blue bg with a 20% alpha and white text</p>
      </div>
    </div>
  );
};

export default ColorsHsl;
