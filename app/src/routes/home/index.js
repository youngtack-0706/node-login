"use strict"

const express = require("express");
const router = express.Router();

//controller
const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);


module.exports = router;