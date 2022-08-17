import { moveTask } from "./moveTask";
import tasksArr from "./utils/tasksArr";

const arr = moveTask(
  "d723f133-dd52-40fe-ba19-c9f7181bef53",
  "em_andamento",
  "nenhum",
  tasksArr
);

console.log("arr move tasks >>>>>>>", arr);
