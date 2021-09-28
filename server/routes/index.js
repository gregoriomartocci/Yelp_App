const { Router } = require("express");
const router = Router();
const businessRoutes = require("./main");

router.use("/", businessRoutes);

module.exports = router;
