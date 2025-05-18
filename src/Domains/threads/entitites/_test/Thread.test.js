const Thread = require('../Thread');

describe('Thread entity', () => {
  it('should throw error when payload contains no needed property', () => {
    const payload = { title: 'A thread' }; // missing body
    expect(() => new Thread(payload)).toThrowError('THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload meets no data type specification', () => {
    const payload = { title: 123, body: true };
    expect(() => new Thread(payload)).toThrowError('THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create Thread entity correctly', () => {
    const payload = { title: 'Thread title', body: 'Thread body' };
    const thread = new Thread(payload);
    expect(thread.title).toEqual(payload.title);
    expect(thread.body).toEqual(payload.body);
  });
});
