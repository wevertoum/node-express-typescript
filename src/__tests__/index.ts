import { moveTask } from "../functions/moveTask";
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
