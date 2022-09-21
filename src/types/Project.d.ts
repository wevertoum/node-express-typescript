import { Task } from "./Task";

export namespace Project {
  interface Model {
    id: string;
    logo: string;
    nome: string;
    entregaveis: Entregavel[];
  }

  interface Entregavel {
    id: string;
    nome: string;
    tarefas: Task.Model[];
  }
}
