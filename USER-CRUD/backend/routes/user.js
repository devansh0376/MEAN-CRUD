const express = require("express");
const {getUser,addUser,getUserById,updateUser,deleteUser} = require("../controllers/user");

const router = express.Router();

router.post("/", addUser);
router.get("/", getUser);
router.get('/:id',getUserById)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)


module.exports = router; // Export the router