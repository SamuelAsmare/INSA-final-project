const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function deleteUnverifiedUsersOlderThan(minutes) {
  const users = await admin.auth().listUsers(1000);
  const now = Date.now();

  users.users.forEach(user => {
    if (!user.emailVerified) {
      const createdAt = new Date(user.metadata.creationTime).getTime();
      const diffMins = (now - createdAt) / (1000 * 60);

      if (diffMins > minutes) {
        admin.auth().deleteUser(user.uid)
          .then(() => console.log(`Deleted unverified user: ${user.email}`))
          .catch(err => console.error(`Error deleting ${user.email}:`, err));
      }
    }
  });
}

module.exports = deleteUnverifiedUsersOlderThan;
