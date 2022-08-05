import 'jest';
import { swapi } from '../src/index';

describe('Basic content', () => {
  it('Should have 30 elements', () => {
    expect(swapi.length).toBe(30);
  });
});
