exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: List Films, group by Director');
};

exports.characters = function(req, res) {
    res.send('NOT IMPLEMENTED: List Characters for the film with id: ' + req.params.filmSwapiId);
};
