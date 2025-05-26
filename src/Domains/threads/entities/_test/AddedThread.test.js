const AddedThread = require('../AddedThread');

describe('An AddedThread entity', () => {
  it('should throw error when payload contained no needed property', () => {
    // Arrange
    const payload = {
      title: 'abc',
    };

    // Action
    expect(() => new AddedThread(payload)).toThrowError('THREAD.CONTAINS_NO_NEEDED_PROPERTY');
  });

  it('should throw error when payload met no data type specification', () => {
    // Arrange
    const payload = {
      id: 'thread-888',
      title: true,
      owner: true,
    };

    // Actio & Assert
    expect(() => new AddedThread(payload)).toThrowError('THREAD.MET_NO_DATA_TYPE_SPECIFICATION');
  });

  it('should create AddedThread object correctly', () => {
    // Arrange
    const payload = {
      id: 'thread-888',
      title: 'abc',
      owner: 'user-777',
    };

    // Action
    const { id, title, owner } = new AddedThread(payload);

    // Assert
    expect(id).toEqual(payload.id);
    expect(title).toEqual(payload.title);
    expect(owner).toEqual(payload.owner);
  });
});
