import React from "react";
import Colors from "./Colors";
import InteractiveElements from "./InteractiveElements";
import Typography from "./Typography";

const DesignSystem = () => {
  return (
    <div className="container flow">
      <h1 className="uppercase">Design System</h1>
      <section className="flow" id="colors">
        <Colors />
      </section>
      <section className="flow" id="typography" style={{ margin: "4rem 0" }}>
        <Typography />
      </section>
      <section className="flow" id="interactive-elements">
        <InteractiveElements />
      </section>
    </div>
  );
};

export default DesignSystem;
