const express = require('express');
const router = express.Router();
const {
  getNotes,
  setNotes,
  updateNotes,
  deleteNotes,
} = require('../controller/noteController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getNotes).post(protect, setNotes);
// router.get("/", getNotes)
// router.post("/", setNotes)
router.route('/:id').put(protect, updateNotes).delete(protect, deleteNotes);
// router.put("/:id", updateNotes)
// router.delete("/:id", deleteNotes)

module.exports = router;
