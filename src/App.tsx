import "./App.css";
import { PlayerItem } from "./components/PlayerItem/PlayerItem";
import { PlayerSetup } from "./components/PlayerSetup/PlayerSetup";
import { TargetBlock } from "./components/TargetBlock/TargetBlock";
import { useGameConfig } from "./store/gameConfigStore";

function App() {
  const { players, activePlayer } = useGameConfig((state) => state);
  const startGame = useGameConfig((state) => state.startGame);
  return (
    <>
      <PlayerSetup />
      {startGame && (
        <>
          <div className="player-list">
            {players.map((item, i) => (
              <PlayerItem
                key={i}
                itemNumber={item.id}
                score={item.score}
                active={i + 1 === activePlayer}
              />
            ))}
          </div>
          <TargetBlock />
        </>
      )}
    </>
  );
}

export default App;
