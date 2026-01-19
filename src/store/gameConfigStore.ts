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
  maxRounds: number;
  currentRound: number;
  endOfTheGame: boolean;
  shotCount: number;
  addPlayers: (quantity: number) => void;
  toggleActivePlayer: () => void;
  addPoints: (multiplier: 1 | 2 | 3) => void;
  setPlayerCount: (value: number) => void;
  minusPoints: () => void;
};

const values = [20, 19, 18, 17, 16, 15, 25, 50, 14, 13, 12, 10, 9];

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
    maxRounds: 2,
    currentRound: 0,
    endOfTheGame: false,
    shotCount: 3,

    addPlayers: (quantity: number) => {
      set({
        activePlayer: 1,
        currentRound: 1,
        shotCount: 3,
        currentTarget: getRandomValue(values),
        endOfTheGame: false,
      });
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
        set({ activePlayer: get().activePlayer + 1, shotCount: 3 });
      } else {
        set({ activePlayer: 1, shotCount: 3 });
        if (get().currentRound < get().maxRounds) {
          set({
            currentRound: get().currentRound + 1,
            currentTarget: getRandomValue(values),
            shotCount: 3,
          });
        } else {
          set({ endOfTheGame: true, shotCount: 3 });
        }
       
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
          shotCount: get().shotCount - 1,
        };
      });
       console.log(get().shotCount);
      if(get().shotCount === 0) get().toggleActivePlayer();
    },

    setPlayerCount: (value: number) => set({ playerCount: value }),
    minusPoints: () => {
      set((state) => {
        return {
          players: state.players.map((player) => {
            if (player.id === state.activePlayer) {
              return {
                ...player,
                score: player.score / 2,
              };
            }
            return player;
          }),
          shotCount: get().shotCount - 1,
        };
      });
    },
  }))
);
