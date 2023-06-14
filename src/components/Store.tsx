import { create } from "zustand";

export interface Todo {
  id: number;
  title: string;
  done: boolean;
  content: string;
}

export interface StoreState {
  todos: Todo[];
  addTodo: (id: number, title: string, done: boolean, content: string) => void;
}

const store = create<StoreState>((set) => ({
  todos: [
    {
      id: 1,
      title: "Apprendre Zustand",
      done: false,
      content:
        "Créer une application simple avec React, TypeScript et Zustand afin d'apprendre à me servir de Zustand",
    },
    {
      id: 2,
      title: "Faire les courses",
      done: false,
      content:
        "Fromage, dessert, carottes, pate feuilletée, miel, oeufs, beurre, chou fleur",
    },
    {
      id: 3,
      title: "Progresser en runnig",
      done: true,
      content:
        "Je dois augmenter de 1km par semaine la distance parcouru à chaque sortie",
    },
  ],
  addTodo: (id, title, done, content) =>
    set((state) => ({
      todos: [...state.todos, { id, title, done, content }],
    })),
}));

export const useStore = create<StoreState>(store);
