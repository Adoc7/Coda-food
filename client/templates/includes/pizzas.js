import './pizzas.html';

Meteor.subscribe("PizzasList");

Template.PizzasList.helpers({
    pizzas: function(){return Pizzas.find()}
});

// Template.pizzaPhot.prod2 = function() {
//     return _.map(_.range(1, 7), function(i) {
//         return {url: 'order' + i + '.png', pi: 'n°' + i}
//     });
// };