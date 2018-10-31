const Movie = require('../models/movie');
const movieCtrl = {};

movieCtrl.getMovies = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
}

movieCtrl.createMovie = async (req, res) => {
   const movie = new Movie({
       name: req.body.name,
       year: req.body.year
   });
   await movie.save();
    res.json({
       'status': 'Movie saved'
    });
}

movieCtrl.getMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
}

movieCtrl.editMovie = async (req, res) => {
    const { id } =  req.params;
    const movie = {
        name: req.body.name,
        year: req.body.year
    };
    await Movie.findByIdAndUpdate(id, {$set: movie}, {new: true});
    res.json({status: 'Movie Updated'});
}

movieCtrl.deleteMovie = async (req, res) => {
    await Movie.findByIdAndRemove(req.params.id);
    res.json({status: 'Movied deleted'});
}

module.exports = movieCtrl;
