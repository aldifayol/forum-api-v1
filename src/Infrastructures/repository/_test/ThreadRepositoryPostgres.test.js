const ThreadRepositoryPostgres = require('../ThreadRepositoryPostgres');
const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddThread = require('../../../Domains/threads/entities/AddThread');
const AddedThread = require('../../../Domains/threads/entities/AddedThread');
const pool = require('../../database/postgres/pool');
const ThreadTableTestHelper = require('../../../../tests/ThreadsTableTestHelper');
const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');

describe('ThreadRepositoryPostgres', () => {
  beforeAll(async () => {
    await UsersTableTestHelper.addUser({
      id: 'user-4171',
      username: 'aldi',
    });
  });

  afterEach(async () => {
    await ThreadTableTestHelper.cleanTable();
  });

  afterAll(async () => {
    await UsersTableTestHelper.cleanTable();
    await pool.end();
  });

  describe('addThread function', () => {
    it('should persist new thread and return added thread correctly', async () => {
      // Arrange
      const payload = {
        title: 'Thread title',
        body: 'the body of the thread',
        owner: 'user-4171',
      };

      const fakeIdGenerator = () => '777';
      const threadRepositoryPostgres = new ThreadRepositoryPostgres(pool, fakeIdGenerator);

      // Action
      const addedThread = await threadRepositoryPostgres.addThread(payload);

      // Assert
      const thread = await ThreadTableTestHelper.findThreadById('thread-777');
      expect(thread).toHaveLength(1);
      expect(addedThread).toStrictEqual(
        new AddedThread({
          id: 'thread-777',
          title: payload.title,
          owner: payload.owner,
        })
      );
    });
  });
});
