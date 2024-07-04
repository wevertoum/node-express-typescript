// ##### ATENÇÃO #####
// para rodar o trem: yarn start
// valeu

import groupCountTasks from "./functions/groupCountTasks";
import dataProjects from "./mocks/dataProjects";
import { generatePDF } from "./functions/generatePDF";

const data = groupCountTasks(dataProjects);
console.log("data new >>>>", data);

// generatePDF()
//   .then(() => {
//     console.log("PDF gerado com sucesso!");
//   })
//   .catch(console.error);
