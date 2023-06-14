import { create } from "zustand";

export interface Todo {
  id: number;
  title: string;
  done: boolean;
  content: string;
}

export interface StoreState {
  todos: Todo[];
  addTodo: (title: string, done: boolean, content: string) => void;
}

const useTodoStore = create<StoreState>()((set) => ({
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
  addTodo: (title, done, content) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length + 1,
          title,
          done,
          content,
        },
      ],
    })),
}));

export default useTodoStore;
