// src/components/PlayerSetup.tsx
import React, { useState } from 'react'
// import { useDartsStore } from '../store/useDartsStore'

export const PlayerSetup: React.FC = () => {
  const [playerCount, setPlayerCount] = useState<number>(2)
  const [targetScore, setTargetScore] = useState<number>(501)
//   const initializePlayers = useDartsStore((state) => state.initializePlayers)
  
  const handleStartGame = () => {
    // initializePlayers(playerCount, targetScore)
  }
  
  return (
    <header className="player-setup">
      <h2>Настройка игры</h2>
      
      <div className="form-group">
        <label htmlFor="playerCount">Количество игроков:</label>
        <input
          type="range"
          id="playerCount"
          min="1"
          max="8"
          value={playerCount}
          onChange={(e) => setPlayerCount(parseInt(e.target.value))}
        />
        <span>{playerCount}</span>
      </div>
      
      <div className="form-group">
        <label htmlFor="targetScore">Целевой счет:</label>
        <select
          id="targetScore"
          value={targetScore}
          onChange={(e) => setTargetScore(parseInt(e.target.value))}
        >
          <option value="301">301</option>
          <option value="501">501</option>
          <option value="701">701</option>
        </select>
      </div>
      
      <button onClick={handleStartGame}>Начать игру</button>
    </header>
  )
}