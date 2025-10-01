const { db } = require("../config/firebase");

// Lấy tasks theo cardId (projectId)
const getTasksByCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    console.log(">>> db:", db); // ✅ debug log
    console.log(">>> cardId:", cardId);

    const snap = await db
      .collection("tasks")
      .where("cardId", "==", String(cardId))
      .get();

    const tasks = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(tasks);
  } catch (err) {
    console.error("Error getTasksByCard:", err);
    res.status(500).json({ error: err.message });
  }
};

// Thêm task mới vào card
const addTask = async (req, res) => {
  try {
    const { cardId } = req.params; // 🔥 lấy cardId từ URL thay vì body
    const { title, assignedTo, priority, deadline, status } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const newTask = {
      title,
      cardId: String(cardId),              // 🔥 luôn gán cardId vào task
      assignedTo: assignedTo || null,
      priority: priority || "normal",
      deadline: deadline ? new Date(deadline) : null,
      status: status || "Icebox",          // mặc định trạng thái
      createdAt: new Date(),
    };

    const docRef = await db.collection("tasks").add(newTask);
    res.json({ id: docRef.id, ...newTask });
  } catch (err) {
    console.error("Error addTask:", err);
    res.status(500).json({ error: err.message });
  }
};

// Cập nhật task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("tasks").doc(id).update(req.body);
    res.json({ id, ...req.body });
  } catch (err) {
    console.error("Error updateTask:", err);
    res.status(500).json({ error: err.message });
  }
};

// Xóa task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("tasks").doc(id).delete();
    res.json({ message: "Task deleted", id });
  } catch (err) {
    console.error("Error deleteTask:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getTasksByCard, addTask, updateTask, deleteTask };
