
Template.saladPhot.prod3 = function() {
    return _.map(_.range(1,7), function(i) {
        return {url: 'sa' + i + '.png', sa: 'n°' + i}
    });
};
