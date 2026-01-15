import "./TargetBlock.css";

export const TargetBlock = () => {
  return (
    <div className="block-target">
      <div className="block-target__miss"> miss</div>
      <div className="block-target__single">S-12</div>
      <div className="block-target__double">D-12</div>
      <div className="block-target__triple">T-12</div>
      <div className="block-target__next">
        <div className="block-target__next-enter">Enter</div>
        <div className="block-target__next-player">
          <p>next </p>
          <p>player</p>
        </div>
      </div>
    </div>
  );
};
