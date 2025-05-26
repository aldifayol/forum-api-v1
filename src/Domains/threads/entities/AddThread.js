class AddThread {
  constructor(payload) {
    this._verifyPayload(payload);

    this.title = payload.title;
    this.body = payload.body;
  }

  _verifyPayload({ title, body }) {
    if (!title || !body) {
      throw new Error('THREAD.CONTAINS_NO_NEEDED_PROPERTY');
    }

    if (typeof title !== 'string' || typeof body !== 'string') {
      throw new Error('THREAD.MEETS_NO_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddThread;
