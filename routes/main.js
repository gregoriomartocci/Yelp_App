const { Router } = require("express");
const { all, search, details } = require("../controllers/business");

const router = Router();

router.get("/search", search);
router.get("/details/:id", details);

module.exports = router;
