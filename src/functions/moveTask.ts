import { Task } from "../types/Task";

export const moveTask = (
  taskId: string,
  statusOriginal: Task.Status,
  status: Task.Status,
  tasks: Task.Model[] = []
) => {
  const newStatusOriginArr =
    tasks
      .filter((task) => task.status === statusOriginal && task.id !== taskId)
      .map((task, i) => {
        return { ...task, ordem: i + 1 };
      }) || [];

  const taskToMove = tasks.find((task) => task.id === taskId);
  const newOrder = tasks.filter((task) => task.status === status).length + 1;

  const restOfTasks = tasks.filter(
    (task) => task.id !== taskId && task.status !== statusOriginal
  );

  const newStatusArr = [
    ...newStatusOriginArr,
    ...restOfTasks,
    { ...taskToMove, status, ordem: newOrder },
  ];
  return newStatusArr;
};
