import './compteur.html';
Template.compteur1.compt = function() {
    return _.map(_.range(1, 7), function(j) {
        return {cpt: + j}
    });
};
