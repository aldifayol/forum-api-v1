const Thread = require('../AddThread');

describe('An AddThread entity', () => {
  it('should throw error when payload contains no needed property', () => {
    // Arrange
    const payload = {
      title: 'A thread',
    };

    // Action & Assert
    expect(() => new Thread(payload)).toThrowError('THREAD.CONTAINS_NO_NEEDED_PROPERTY');
  });

  it('should throw error when payload meets no data type specification', () => {
    // Arrange
    const payload = {
      title: 888,
      body: true,
    };

    // Action & Assert
    expect(() => new Thread(payload)).toThrowError('THREAD.MEETS_NO_DATA_TYPE_SPECIFICATION');
  });

  it('should create Thread object correctly', () => {
    // Arrange & Action
    const payload = {
      title: 'Thread title',
      body: 'Thread body',
    };
    const thread = new Thread(payload);

    // Assert
    expect(thread.title).toEqual(payload.title);
    expect(thread.body).toEqual(payload.body);
  });
});
