import React from "react";
import Colors from "./Colors";
import Typography from "./Typography";

const DesignSystem = () => {
  return (
    <div className="container">
      <h1 className="uppercase">Design System</h1>
      <section id="colors">
        <Colors />
      </section>
      <section id="typography" style={{ margin: "4rem 0" }}>
        <Typography />
      </section>
    </div>
  );
};

export default DesignSystem;
