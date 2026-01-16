import "./App.css";
import { PlayerItem } from "./components/PlayerItem/PlayerItem";
import { PlayerSetup } from "./components/PlayerSetup/PlayerSetup";
import { TargetBlock } from "./components/TargetBlock/TargetBlock";
import { useGameConfig } from "./store/gameConfig";

function App() {
  const {players, activePlayer  }= useGameConfig((state) => state);

  return (
    <>
      <PlayerSetup />
      <div className="player-list">
        {players.map((item, i) => (
          <PlayerItem key={i} itemNumber={item.id} score={item.score} active={i+1 === activePlayer} />
        ))}
      </div>
      <TargetBlock />
    </>
  );
}

export default App;
