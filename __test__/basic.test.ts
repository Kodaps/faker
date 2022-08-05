// eslint-disable-next-line import/no-extraneous-dependencies
import 'jest';
// eslint-disable-next-line import/no-unresolved
import { swapi } from '../src/index';

describe('Basic content', () => {
  it('Should have 30 elements', () => {
    expect(swapi.length).toBe(30);
  });
});
