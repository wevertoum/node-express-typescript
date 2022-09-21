// ##### ATENÇÃO #####
// para rodar o trem: yarn start
// valeu

import groupCountTasks from "./functions/groupCountTasks";
import dataProjects from "./mocks/dataProjects";

const data = groupCountTasks(dataProjects);
console.log("data new >>>>", data);
