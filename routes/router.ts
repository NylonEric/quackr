const express = require('express');
const router = express.Router();

// define route
router.get('/', (req, res) => {
  try {
    res.send('Page successfully loaded!');
  } catch {err => {
    console.error('error in server request:', err);
  };
}
});

module.exports = router;
