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
  playerCount: number;
  // maxRounds: 10
  addPlayers: (quantity: number) => void;
  toggleActivePlayer: () => void;
  addPoints: (multiplier: 1 | 2 | 3) => void;
  setPlayerCount: (value: number) => void;
};

const values = [20, 19, 18, 17, 16, 15, 25, 50];

function getRandomValue(array: number[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export const useGameConfig = create<StateType>()(
  devtools((set, get) => ({
    players: [],
    activePlayer: 1,
    maxPlayers: 8,
    currentTarget: 0,
    playerCount: 2,
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
      if (get().activePlayer < get().playerCount) {
        set({ activePlayer: get().activePlayer + 1 });
      } else {

        console.log(get().activePlayer);
        
        set({ activePlayer: 1 });
      }
    },

    addPoints: (multiplier: 1 | 2 | 3) => {
      set((state) => {
        return {
          players: state.players.map((player) => {
            if (player.id === state.activePlayer) {
              return {
                ...player,
                score: player.score + state.currentTarget * multiplier,
              };
            }
            return player;
          }),
        };
      });
    },

    setPlayerCount: (value: number) => set({ playerCount: value }),
  }))
);
