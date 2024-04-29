const router = require("express").Router();

router.use("/api-docs", require("./swagger"))
.use("/contacts", require("./contacts"))
.get("/", (req, res) => {
  res.send(
    "Welcome to the contacts API. You can try the API out at /api-docs."
  );
});

module.exports = router;
