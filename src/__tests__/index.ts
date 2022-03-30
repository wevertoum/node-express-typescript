import { getAllProductsName } from '../index';
import daysSale from '../utils/data.json';

test('add function exists', () => {
  expect(getAllProductsName(daysSale))
    .toHaveLength(14);
});