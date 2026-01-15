import "./App.css";
import { PlayerItem } from "./components/PlayerItem/PlayerItem";
import { PlayerSetup } from "./components/PlayerSetup/PlayerSetup";
import { TargetBlock } from "./components/TargetBlock/TargetBlock";

function App() {
  return (
    <>
          <PlayerSetup />
      <div className="player-list">
        <PlayerItem itemNumber={1} active />
        <PlayerItem itemNumber={2} />
      </div>
      <TargetBlock/>
  
    </>
  );
}

export default App;
