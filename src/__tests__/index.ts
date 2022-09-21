import { moveTask } from "../functions/moveTask";
import tasksVerify from "../functions/tasksVerify";
import dataProjectsMyTasks from "../mocks/dataProjectsMyTasks";
import { expectedTasks } from "../mocks/expectedTasks";
import tasksArr from "../utils/tasksArr";

test("test move tasks", () => {
  expect(
    moveTask(
      "d723f133-dd52-40fe-ba19-c9f7181bef53",
      "em_andamento",
      "nenhum",
      tasksArr
    )
  ).toEqual(expectedTasks);
});

test("execution time verifyIfHasTasksMap", () => {
  const start = performance.now();
  const hasTask = tasksVerify.verifyIfHasTasksMap(dataProjectsMyTasks);
  const end = performance.now();
  console.log("time verifyIfHasTasksMap: ", end - start);
  expect(hasTask).toBe(true);
});

test("execution time verifyIfHasTasksSome", () => {
  const start = performance.now();
  const hasTask = tasksVerify.verifyIfHasTasksSome(dataProjectsMyTasks);
  const end = performance.now();
  console.log("time verifyIfHasTasksSome: ", end - start);
  expect(hasTask).toBe(true);
});

test("execution time verifyIfHasTasksFor", () => {
  const start = performance.now();
  const hasTask = tasksVerify.verifyIfHasTasksFor(dataProjectsMyTasks);
  const end = performance.now();
  console.log("time verifyIfHasTasksFor: ", end - start);
  expect(hasTask).toBe(true);
});
