import { create } from "zustand";

export interface Todo {
  id: number;
  title: string;
  done: boolean;
  content: string;
}

export interface StoreState {
  todo: Todo[];
  addTodo: ( title: string, done: boolean, content: string) => void;
}


// Le le hook de ton store qui va te permettre d'avoir accès
// a ta donnée partout dans ton app
// en faisant les appels comme comme dans TodoContainer pour l'affiche

const useTodoStore = create<StoreState>()((set) => ({
  todo: [
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
  // Grace à cette action tu mettras a jour ton store
  addTodo: ( title, done, content) =>
    set((state) => ({
      todo: [...state.todo, { 
        id:state.todo.length +1, // petit bonnus pour mettre a jour tes ID mais tu peux le changer 
         title, done, content }],
    })),
}));


export default useTodoStore

// A SUPPRIMER inutile export const useStore = create<StoreState>(store);
