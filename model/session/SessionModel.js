const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  associate: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Session = mongoose.model('session', sessionSchema);

const createSession = (sessionObj) => Session.create(sessionObj);
const deleteSession = async (accessToken) => {
  const dt = await Session.findOneAndDelete({ accessToken });
  return dt;
};
const deleteSessionByFilter = async (filter) => Session.findOneAndDelete(filter);

module.exports = {
  createSession,
  deleteSession,
  deleteSessionByFilter,
};
