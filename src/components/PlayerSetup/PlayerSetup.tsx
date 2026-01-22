import React from "react";
import { useGameConfig } from "../../store/gameConfigStore";
import "./PlayerSetup.css";
import { ButtonStartGame } from "../ButtonStartGame/ButtonStartGame";

export const PlayerSetup: React.FC = () => {
  const { setPlayerCount, setMaxRounds } = useGameConfig(
    (state) => state.actions,
  );
  const {
    maxPlayers,
    playerCount,
    maxRounds,
    currentRound,
    endOfTheGame,
    startGame,
    shotCount,
    players,
  } = useGameConfig((state) => state);

  const { addPlayers, setStartGame } = useGameConfig((state) => state.actions);

  return (
    <header className="player-setup">
      {!startGame && (
        <>
          <h2 className="player-setup__title">Настройка игры</h2>
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
          <div className="form-group">
            <label htmlFor="maxRounds">Количество раундов:</label>
            <input
              type="range"
              id="maxRounds"
              min="5"
              max={13}
              value={maxRounds}
              onChange={(e) => setMaxRounds(parseInt(e.target.value))}
            />
            <span>{maxRounds}</span>
          </div>
        </>
      )}

      {!startGame && (
        <ButtonStartGame
          text="Начать игру"
          onClick={() => {
            addPlayers(playerCount);
            setStartGame();
          }}
        />
      )}

      {endOfTheGame && (
        <ButtonStartGame
          text="Новая игра"
          onClick={() => {
            addPlayers(playerCount);
            setStartGame();
          }}
        />
      )}

      {endOfTheGame ? (
        <h3>Игра окончена</h3>
      ) : (
        startGame &&
        players.length > 0 && (
          <div className="options">
            <div className="options__rounds">
              <p className="options__rounds-item options__rounds-item_current">
                R{currentRound}
              </p>
              <p className="options__rounds-item">/{maxRounds}</p>
            </div>
            <button
              onClick={() => {
                addPlayers(playerCount);
                setStartGame();
              }}
            >
              Новая игра
            </button>
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
