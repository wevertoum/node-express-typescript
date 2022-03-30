import { getAllProductsName } from '../index';

import daysSale from '../utils/data.json';


// test if add function exists
test('add function exists', () => {
  // test if the size of returned array is 14
  expect(getAllProductsName(daysSale))
    .toHaveLength(14);

});