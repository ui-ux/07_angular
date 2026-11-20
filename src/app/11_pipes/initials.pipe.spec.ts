import { describe, expect, it } from 'vitest';
import { InitialsPipe } from './initials.pipe';

describe('InitialsPipe', () => {
  const pipe = new InitialsPipe();

  it('returns initials from the first two words', () => {
    expect(pipe.transform('  ada   lovelace byron ')).toBe('AL');
  });

  it('returns an empty string for null, undefined, or blank input', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
    expect(pipe.transform('   ')).toBe('');
  });
});
