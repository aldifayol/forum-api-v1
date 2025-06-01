class AddThread {
  constructor(payload) {
    this._verifyPayload(payload);

    this.title = payload.title;
    this.body = payload.body;
    this.owner = payload.owner;
  }

  _verifyPayload({ title, body, owner }) {
    if (!title || !body || !owner) {
      throw new Error('THREAD.CONTAINS_NO_NEEDED_PROPERTY');
    }

    if (typeof title !== 'string' || typeof body !== 'string' || typeof owner !== 'string') {
      throw new Error('THREAD.MEETS_NO_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddThread;
