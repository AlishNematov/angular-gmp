import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return string of duration equal 1h 39 min', () => {
    const inputValue = 99;
    const expectingValue = '1h 39 min';
    expect(pipe.transform(inputValue)).toBe(expectingValue);
  });

  it('should return string of duration without hours if duration less then 60 mins', () => {
    const inputValue = 54;
    const expectingValue = '54 min';
    expect(pipe.transform(inputValue)).toBe(expectingValue);
  });
});
