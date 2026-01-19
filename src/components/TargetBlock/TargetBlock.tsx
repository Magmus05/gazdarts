import { useGameConfig } from "../../store/gameConfigStore";
import "./TargetBlock.css";

export const TargetBlock = () => {
  const {
    toggleActivePlayer,
    currentTarget,
    addPoints,
    minusPoints,
    endOfTheGame,
  } = useGameConfig((state) => state);
  return (
    !endOfTheGame && (
      <div className="block-target">
        <div
          className="block-target__miss"
          onClick={() => {
            minusPoints();
            toggleActivePlayer();
          }}
        >
          {" "}
          miss
        </div>
        <div className="block-target__single" onClick={() => addPoints(1)}>
          S-{currentTarget}
        </div>
        <div className="block-target__double" onClick={() => addPoints(2)}>
          D-{currentTarget}
        </div>
        <div className="block-target__triple" onClick={() => addPoints(3)}>
          T-{currentTarget}
        </div>
        <div className="block-target__next">
          {/* <div className="block-target__next-enter">Enter</div> */}
          <div
            className="block-target__next-player"
            onClick={toggleActivePlayer}
          >
            <p>next </p>
            <p>player</p>
          </div>
        </div>
      </div>
    )
  );
};
