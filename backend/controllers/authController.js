const { db } = require("../config/firebase.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = 'hello';

const signUp = async (req, res) => {
    try{
        const { email, name, password } = req.body;

        //check email existed
        const snap = await db.collection("users").where("email", "==", email).get();
        if(!snap.empty){
            return res.status(400).json({error: "Email already registered!"})
        }

        //hash pw
        const hash = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, hash);

        //save user
        const newUser = {
            email,
            name,
            passwordHash,
            createAt: new Date()
        }

        const userRef = await db.collection("users").add(newUser);

        res.status(200).json({ id: userRef.id, email, name });
    }
    catch(e){
        res.status(500).json({error: e.message});
    }
}


const signIn = async (req, res) => {
    try{
        const { email, password } = req.body;

        //find account
        const snap = await db.collection("users").where("email", "==", email).get();
        if(snap.empty){
            return res.status(400).json("Invalid email or password");
        }

        const user = snap.docs[0].data();
        const userId = snap.docs[0].id;

        //check password
        const isChecked = await bcrypt.compare(password, user.passwordHash);
        if(!isChecked){
            return res.status(400).json({error: "Invalid email or password"});
        }

        const token = jwt.sign({ id: userId, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

        return res.json({ token, user: { id: userId, email: user.email, name: user.name } });
    }
    catch(e){
        res.status(500).json({error: e.message});
    }
}


const githubLogin = async (req, res) => {
  try {
    const { email, name, avatar, providerId } = req.body;
    console.log("GitHub login request body:", req.body);

    if (!email || !providerId) {
      return res.status(400).json({ error: "Email and providerId is required" });
    }

    let firebaseUser;
    try {
      try {
        firebaseUser = await admin.auth().getUserByEmail(email);
      } catch(err) {
        console.log("Firebase getUserByEmail lỗi:", err.message);
      }

       console.log("Email đã tồn tại trong Firebase Auth");

    } catch (err) {
       console.log("Email chưa tồn tại, tiếp tục tạo user");

      firebaseUser = await admin.auth().createUser({
        uid: providerId.toString(),
        email,
        displayName: name,
        photoURL: avatar || null,
      });
    }


    const snap = await db.collection("users").where("email", "==", email).get();
    let userId;
    
    if (snap.empty) {
      const newUser = {
        email,
        name,
        firebaseUid: providerId,
        createdAt: new Date(),
      };
      const userRef = await db.collection("users").add(newUser);
      userId = userRef.id;
    } else {
      // Nếu có rồi thì lấy ID
      userId = snap.docs[0].id;
    }
    console.log("Firestore user exists:", !snap.empty);
console.log("Firestore user ID:", userId);

    // Tạo JWT
    const token = jwt.sign({ id: userId, email }, SECRET_KEY, { expiresIn: "1h" });
if (!SECRET_KEY) throw new Error("JWT_SECRET is not defined");


    return res.json({ token, user: { id: userId, email, name, avatar } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = { signIn, signUp, githubLogin};