const Evaluation = require('../models/evaluation');
const evaluationCtrl = {};

evaluationCtrl.getEvaluations = async (req, res) => {
    const evaluations = await Evaluation.find();
    res.json(evaluations);
}

evaluationCtrl.createEvaluation = async (req, res) => {
   const evaluation = new Evaluation({
       name: req.body.name,
       movie: req.body.movie,
       evaluation: req.body.evaluation
   });
   await evaluation.save();
    res.json({
       'status': 'Evaluation saved'
    });
}

evaluationCtrl.getEvaluation = async (req, res) => {
    const evaluation = await Evaluation.findById(req.params.id);
    res.json(evaluation);
}

evaluationCtrl.editEvaluation = async (req, res) => {
    const { id } =  req.params;
    const evaluation = {
        name: req.body.name,
        movie: req.body.movie,
        evaluation: req.body.evaluation
    };
    await Evaluation.findByIdAndUpdate(id, {$set: evaluation}, {new: true});
    res.json({status: 'Evaluation Updated'});
}

evaluationCtrl.deleteEvaluation = async (req, res) => {
    await Evaluation.findByIdAndRemove(req.params.id);
    res.json({status: 'Evaluationd deleted'});
}

module.exports = evaluationCtrl;
