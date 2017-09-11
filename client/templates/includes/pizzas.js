Template.pizzaPhot.prod2 = function() {
    return _.map(_.range(1, 7), function(i) {
        return {url: 'order' + i + '.png', pi: 'n°' + i}
    });
};