const { db } = require("../config/firebase.js");

// Lấy tất cả cards (admin)
const getCards = async (req, res) => {
  try {
    const snap = await db.collection("projects").get();
    const cards = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(cards);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getCardsByUser = async (req, res) => {
  const uid = req.params.id;

  if (!uid) {
    return res.status(400).json({ error: "Thiếu uid hoặc chưa xác thực" });
  }

  try {
    const snap = await db.collection("projects").where("ownerId", "==", uid).get();

    const cards = await Promise.all(
      snap.docs.map(async (doc) => {
        const taskSnap = await db.collection("tasks")
          .where("cardId", "==", doc.id)
          .get();

        return {
          id: doc.id,
          ...doc.data(),
          countTasks: taskSnap.size
        };
      })
    );

    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Thêm 1 card (project)
const addCard = async (req, res) => {
  try {
    const { name, description, ownerId } = req.body;
    const uid = req.params.uid;
    const newCard = {
      name,
      description,
      ownerId,
      createAt: new Date()
    };
    const docRef = await db.collection("projects").add(newCard);
    res.json({ id: docRef.id, ...newCard });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Cập nhật card (project)
const updateCard = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("projects").doc(id).update(req.body); // ✅ projects
    res.json({ id, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Xóa card (project)
const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("projects").doc(id).delete(); // ✅ projects
    res.json({ message: "Card deleted", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getCards, getCardsByUser, addCard, updateCard, deleteCard };
