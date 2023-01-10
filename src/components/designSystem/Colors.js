const Colors = () => {
  return (
    <>
      <h2 className="numberd-title">
        <span>01 </span>
        colors
      </h2>
      <div className="flex">
        <div style={{ flexGrow: "1" }}>
          <div
            className="ff-serif fs-500"
            style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
          >
            #0B0D17
          </div>
          <p>
            <span className="text-accent">RGB</span>11, 13, 23
          </p>
          <p>
            <span className="text-accent">HSL</span>230°, 35%, 7%
          </p>
        </div>
        <div style={{ flexGrow: "1" }}>
          <div
            className="bg-accent text-dark ff-serif fs-500"
            style={{ padding: "3rem 1rem 1rem" }}
          >
            #D0D6F9
          </div>
          <p>
            <span className="text-accent">RGB</span>208, 214, 249
          </p>
          <p>
            <span className="text-accent">HSL</span>231°, 77%, 90%
          </p>
        </div>
        <div style={{ flexGrow: "1" }}>
          <div
            className="bg-white text-dark ff-serif fs-500"
            style={{ padding: "3rem 1rem 1rem" }}
          >
            #FFFFFF
          </div>
          <p>
            <span className="text-accent">RGB</span>255, 255, 255
          </p>
          <p>
            <span className="text-accent">HSL</span>0°, 0%, 100%
          </p>
        </div>
      </div>
    </>
  );
};

export default Colors;
