const { db } = require("../config/firebase.js");

const getUsers = async (req, res) => {
    try{
        const snap = await db.collection("users").get();
        const users = snap.docs.map(doc => ({id: doc.id, ...doc.data()}));
        res.status(200).json(users);
    }
    catch(e){
        res.status(500).json({erroe: e.mesage});
    }
}

module.exports = { getUsers };