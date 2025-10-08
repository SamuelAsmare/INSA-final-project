const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// Initialize Firebase Admin SDK with service account credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Function to delete unverified users older than a given number of minutes
async function deleteUnverifiedUsersOlderThan(minutes) {
  const users = await admin.auth().listUsers(1000); // Fetch up to 1000 users
  const now = Date.now();

  users.users.forEach(user => {
    if (!user.emailVerified) {
      const createdAt = new Date(user.metadata.creationTime).getTime();
      const diffMins = (now - createdAt) / (1000 * 60);

      // Delete the user if account is older than specified minutes and not verified
      if (diffMins > minutes) {
        admin.auth().deleteUser(user.uid)
          .then(() => console.log(`Deleted unverified user: ${user.email}`))
          .catch(err => console.error(`Error deleting ${user.email}:`, err));
      }
    }
  });
}

// Export the function so it can be used elsewhere in the project
module.exports = deleteUnverifiedUsersOlderThan;
