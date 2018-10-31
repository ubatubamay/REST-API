const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const movie = require('../controllers/movie.controller');

router.get('/', movie.getMovies);
router.post('/', movie.createMovie);
router.get('/:id', movie.getMovie);
router.put('/:id', movie.editMovie);
router.delete('/:id', movie.deleteMovie);

module.exports = router;
