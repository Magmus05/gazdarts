// src/components/PlayerSetup.tsx
import React from "react";
import { useGameConfig } from "../../store/gameConfig";
import "./PlayerSetup.css";

export const PlayerSetup: React.FC = () => {
  const { addPlayers, maxPlayers, playerCount, setPlayerCount } = useGameConfig(
    (store) => store
  );

  return (
    <header className="player-setup">
      <h2>Настройка игры</h2>

      <div className="form-group">
        <label htmlFor="playerCount">Количество игроков:</label>
        <input
          type="range"
          id="playerCount"
          min="1"
          max={maxPlayers}
          value={playerCount}
          onChange={(e) => setPlayerCount(parseInt(e.target.value))}
        />
        <span>{playerCount}</span>
      </div>

      <button className="button-start" onClick={() => addPlayers(playerCount)}>
        Начать игру
      </button>
    </header>
  );
};
