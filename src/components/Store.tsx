import { create } from 'zustand'


export interface Todo {
  id: number;
  title: string;
  done: boolean;
  content: string;
}

export interface TodoState {
Todo: Todo[];
AddTodo: void;
}
const useTodoStore = create<TodoState>()((set) => ({
  Todo: [
    { id: 1, title: "Apprendre Redux", done: false, content: "Créer une application simple avec React, TypeScript et Redux-Toolkit afin d'apprendre à me servir de Redux-Toolkit" },
    { id: 2, title: "Faire les courses", done: false, content: "Fromage, dessert, carottes, pate feuilletée, miel, oeufs, beurre, chou fleur" },
    { id: 3, title: "Progresser en runnig", done: true, content: "Je dois augmenter de 1km par semaine la distance parcouru à chaque sortie" },
  ],
  AddTodo: (by) => set((state) => ({ Todo: state.Todo + by })),
}))

export default useTodoStore;
