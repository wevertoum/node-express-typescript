import { Project } from "../types/Project";

const verifyIfHasTasksMap = (projects: any[]) => {
  if (projects && projects.length > 0) {
    projects.map((project) =>
      project.entregaveis.map(
        (deliverable: any) => deliverable.tarefas.length > 0
      )
    );
  }
  return false;
};

const verifyIfHasTasksSome = (projects: any[]) => {
  if (projects && projects.length > 0) {
    return projects.some((project: any) =>
      project.entregaveis.some(
        (deliverable: any) => deliverable.tarefas.length > 0
      )
    );
  }
  return false;
};

const verifyIfHasTasksFor = (projects: any[]) => {
  if (projects && projects.length > 0) {
    for (let i = 0; i < projects.length; i++) {
      for (let j = 0; j < projects[i].entregaveis.length; j++) {
        if (projects[i].entregaveis[j].tarefas.length > 0) {
          return true;
        }
      }
    }
  }
  return false;
};

export default {
  verifyIfHasTasksMap,
  verifyIfHasTasksSome,
  verifyIfHasTasksFor,
};
