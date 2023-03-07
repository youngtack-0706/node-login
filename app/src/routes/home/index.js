"use strict"

const express = require("express");
const router = express.Router();

//controller
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);

//login
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);


module.exports = router;