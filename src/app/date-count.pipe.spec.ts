import { DateCountPipe } from './date-count.pipe';

describe('DatePipe', () => {
  it('create an instance', () => {
    const pipe = new DateCountPipe();
    expect(pipe).toBeTruthy();
  });
});
