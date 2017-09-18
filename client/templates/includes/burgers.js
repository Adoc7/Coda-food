import './burgers.html';

Meteor.subscribe("BurgersList");

Template.BurgersList.helpers({
    burgers: function(){return Burgers.find()}
});




// Template.burgPhot.prod4 = function() {
//     return _.map(_.range(1, 7), function(i) {
//         return {url: 'b' + i + '.png', bu: 'n°' + i}
//     });
// };