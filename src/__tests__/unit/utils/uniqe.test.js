// Utilities
import UniqeId from 'utils/uniqe';

describe('UniqeId Utils', () => {
  test('Normal case', () => {
    expect(UniqeId()).toBe(Date.now())
  });
});
