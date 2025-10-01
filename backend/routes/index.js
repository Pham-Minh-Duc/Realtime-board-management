
const express = require("express");
const { signUp, signIn, githubLogin } = require("../controllers/authController");
const { getUsers } = require("../controllers/userController");
const { addCard, getCards, updateCard, deleteCard, getCardsByUser } = require("../controllers/cardController")
const { getTasksByCard, addTask, updateTask, deleteTask } = require("../controllers/taskController")

const router = express.Router();

router.post("/auth/signup", signUp);
router.post("/auth/signin", signIn);
router.post("/auth/github-login", githubLogin);

router.get("/users", getUsers);

router.get("/cards", getCards);
router.get("/cards/:id", getCardsByUser);
router.post("/cards/add", addCard);
router.put("/cards/:id", updateCard);
router.delete("/cards/:id",deleteCard);


router.get("/cards/:cardId/tasks", getTasksByCard);
router.post("/cards/:cardId/tasks", addTask);
router.put("/cards/:cardId/tasks/:id", updateTask);
router.delete("/cards/:cardId/tasks/:id", deleteTask);


module.exports = router;