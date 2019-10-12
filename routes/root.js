const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // This will contain files which the user will see
  res.send({ msg: "Hello World!" });
});

module.exports = router;