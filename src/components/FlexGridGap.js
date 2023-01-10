import { useEffect } from "react";

const FlexGridGap = () => {
  // useEffect(() => {
  //   const amount = getComputedStyle(document.documentElement).getPropertyValue(
  //     "--gap"
  //   );
  //   console.log(amount);
  //   document.documentElement.style.setProperty("--gap", "10rem");
  // }, []);

  return (
    <div className="container">
      <div className="flex" style={{ "--gap": "5rem" }}>
        <div className="box sr-only">
          <p>test</p>
        </div>
        <div className="box">
          <p>test</p>
        </div>
        <div className="box">
          <p>test</p>
        </div>
        <div className="box">
          <p>test</p>
        </div>
      </div>
      <div className="call-to-action grid">
        <div className="box sr-only">
          <p>test</p>
        </div>
        <div className="box">
          <p>test</p>
        </div>
        <div className="box">
          <p>test</p>
        </div>
        <div className="box">
          <p>test</p>
        </div>
      </div>
    </div>
  );
};

export default FlexGridGap;
