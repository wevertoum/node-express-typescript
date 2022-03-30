import { getAllProductsName } from '../index';
import daysSale from '../utils/data.json';

test('check size of array', () => {
  expect(getAllProductsName(daysSale).length).toBe(14);

});

test('check if all itens returned are string', () => {
  expect(getAllProductsName(daysSale).every(item => typeof item === 'string')).toBe(true);
})