const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const evaluation = require('../controllers/evaluation.controller');

router.get('/', evaluation.getEvaluations);
router.post('/', evaluation.createEvaluation);
router.get('/:id', evaluation.getEvaluation);
router.put('/:id', evaluation.editEvaluation);
router.delete('/:id', evaluation.deleteEvaluation);

module.exports = router;
