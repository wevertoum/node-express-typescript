import { Project } from "../types/Project";

const groupCountTasks = (projects: Project.Model[]) => {
  return projects.map((project) => {
    return {
      ...project,
      statusCount: project.entregaveis.reduce((acc, entregavel) => {
        const status = entregavel.tarefas.reduce((acc, task) => {
          acc[task.status] = acc[task.status] + 1 || 1;
          return acc;
        }, {} as any);
        return {
          ...acc,
          ...status,
        };
      }, {} as any),
    };
  });
};

export default groupCountTasks;
