import { getBinPath } from '.';
import { generatePath } from './Common.Helpers';

describe('Url Path Creation', () => {
  it('joins provided string arguments with a slash', () => {
    expect(generatePath('root', 'dir', 'dir')).toBe('root/dir/dir');
  });

  it('removes extraneous slashes', () => {
    expect(generatePath('root/', 'dir/', 'dir')).toBe('root/dir/dir');
  });

  it('filters empty strings', () => {
    expect(generatePath('root', 'dir', '')).toBe('root/dir');
  });

  it('handles undefined', () => {
    expect(generatePath('/', undefined)).toBe('/');
  });
});

describe('get bin path', () => {
  it('returns the require main path', () => {
    require.resolve('./');
    expect(getBinPath()).toBeDefined();
  });
});
