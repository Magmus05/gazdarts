import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Player {
  id: number;
  name: string;
  score: number;
}

type StateType = {
  players: Player[];
  activePlayer: number;
  maxPlayers: number;
  currentTarget: number;
  // maxRounds: 10
  addPlayers: (quantity: number) => void;
  toggleActivePlayer: () => void;
  addPoints: (multiplier: 1 | 2 | 3 ) => void;
};

const values = [20, 19, 18, 17, 16, 15, 25, 50];

function getRandomValue(array: number[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export const useGameConfig = create<StateType>()(devtools ((set, get) => ({
  players: [],
  activePlayer: 1,
  maxPlayers: 8,
  currentTarget: 0,
  addPlayers: (quantity: number) => {
    set({ activePlayer: 1 });
    set({ currentTarget: getRandomValue(values) });
    if (quantity < 1 || quantity > get().maxPlayers) {
      alert(`Количество игроков должно быть от 1 до ${get().maxPlayers}`);
      return;
    }
    const players = Array.from({ length: quantity }, (_, i) => ({
      id: i + 1,
      name: `${i + 1}`,
      score: 0,
    }));
    set({
      players,
    });
  },

  toggleActivePlayer: () => {
    set({ activePlayer: get().activePlayer + 1 });
  },

 addPoints: (multiplier: 1 | 2 | 3 ) => {
    set((state) => {
      console.log(state.players);
      
      const pointsToAdd = state.currentTarget * multiplier;
      
      return {
        players: state.players.map((player) => {
          if (player.id === state.activePlayer) {
            return {
              ...player,
              score: player.score + pointsToAdd,
            };
          }
          return player;
        }),
        // Можно автоматически менять цель после броска
       
      };
      
    });
  },

})));
