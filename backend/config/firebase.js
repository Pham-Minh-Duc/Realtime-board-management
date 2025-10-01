const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

// Khởi tạo app nếu chưa có
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Firestore instance
const db = admin.firestore();

module.exports = { admin, db };
