const Thread = require('../Thread');

describe('Thread detail entity', () => {
  it('should create Thread object correctly', () => {
    // Arrange & Action
    const payload = {
      id: 'thread-777',
      title: 'Thread title',
      body: 'Thread body',
      date: new Date().toISOString(),
      username: 'user-777',
    };

    const threadDetail = new Thread(payload);

    // Assert
    expect(threadDetail.id).toEqual(payload.id);
    expect(threadDetail.title).toEqual(payload.title);
    expect(threadDetail.body).toEqual(payload.body);
    expect(threadDetail.date).toEqual(payload.date);
    expect(threadDetail.username).toEqual(payload.username);
  });
});
