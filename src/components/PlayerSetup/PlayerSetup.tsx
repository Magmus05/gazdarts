// src/components/PlayerSetup.tsx
import React from "react";
import { useGameConfig } from "../../store/gameConfigStore";
import "./PlayerSetup.css";

export const PlayerSetup: React.FC = () => {
  const {
    addPlayers,
    maxPlayers,
    playerCount,
    setPlayerCount,
    maxRounds,
    currentRound,
    endOfTheGame,
    shotCount,
    players,
  } = useGameConfig((store) => store);

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
        Начать новую игру
      </button>

      {endOfTheGame ? (
        <h3>Игра окончена</h3>
      ) : (
        players.length > 0 && (
          <div className="options">
            <div className="options__rounds">
              <p className="options__rounds-item options__rounds-item_current">
                R{currentRound}
              </p>
              <p className="options__rounds-item">/{maxRounds}</p>
            </div>

            <div className="options__block-dart">
              {Array.from({ length: shotCount }, (_, i) => (
                <div className="options__block-dart-item" key={i}></div>
              ))}
            </div>
          </div>
        )
      )}
    </header>
  );
};
