import { Models } from "./types/Fruits";

export const getAllProductsName = (days: Models.DaySale[]) => {
  return days.flatMap(day => day.products.map(product => product.name));
}


