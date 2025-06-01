const AddThreadUseCase = require('../AddThreadUseCase');
const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddThread = require('../../../Domains/threads/entities/AddThread');
const AddedThread = require('../../../Domains/threads/entities/AddedThread');

describe('AddThreadUseCase', () => {
  it('should orchestrate the add thread use case correctly', async () => {
    // Arrange
    const useCasePayload = {
      title: 'Thread title',
      body: 'this is the thread body',
      owner: 'user-888',
    };

    const expectAddedThread = new AddedThread({
      id: 'thread-777',
      title: useCasePayload.title,
      owner: useCasePayload.owner,
    });

    // Mock repository
    const mockThreadRepository = {
      addThread: jest.fn().mockResolvedValue({ id: 'thread-777' }),
    };
    console.log(mockThreadRepository);

    // Create use-case instance with mock
    const addThreadUseCase = new AddThreadUseCase({
      threadRepository: mockThreadRepository,
    });

    // Action
    const addedThread = await addThreadUseCase.execute(useCasePayload);

    // Assert
    expect(mockThreadRepository.addThread).toBeCalledWith({
      title: useCasePayload.title,
      body: useCasePayload.body,
      owner: useCasePayload.owner,
    });

    expect(addedThread).toStrictEqual(expectAddedThread);
  });
});
