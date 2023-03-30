const asyncHandler = require('express-async-handler');

const Note = require('../model/noteModel');
const User = require('../model/userModel');

// @desc    Get Notes
// @router GET/api/Notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.status(200).json(notes);
});
// @desc    set Notes
// @router POST/api/Notes
// @access Private
const setNotes = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add text field');
  }
  const note = await Note.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(note);
});
// @desc    Update Notes
// @router PUT/api/Notes/:id
// @access Private
const updateNotes = asyncHandler(async (req, res) => {
  const Note = await Note.findById(req.params.id);

  if (!Note) {
    res.status(400);
    throw new Error('Note not found');
  }

  //const user = await User.findById(req.user.id) --> don't need to find user again as it is on middleware
  // check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }
  // make sure the login user matched Note user
  if (Note.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  const updateNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updateNote);
});
// @desc    Delete Notes
// @router DELETE/api/Notes/:id
// @access Private
const deleteNotes = asyncHandler(async (req, res) => {
  const Note = await Note.findById(req.params.id);
  if (!Note) {
    res.status(400);
    throw new Error('Note not found');
  }
  //const user = await User.findById(req.user.id); --> user already on middle
  // check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }
  // make sure the login user matched Note user
  if (Note.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }
  await Note.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getNotes,
  setNotes,
  updateNotes,
  deleteNotes,
};
