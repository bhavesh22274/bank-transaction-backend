const express = require("express");
const router = express.Router();
const { userRegisterController,userLoginController } = require("../controller/auth.controller");
module.exports = router;
//POST /api/auth/register
router.post("/register", userRegisterController);
//POST /api/auth/login
router.post("/login", userLoginController);