import './desserts.html';

Meteor.subscribe("DessertsList");

Template.DessertsList.helpers({
    desserts: function(){return Desserts.find()}
});




// Template.dessertPhot.prod5 = function() {
//     return _.map(_.range(1, 7), function(i) {
//         return {url: 'd' + i + '.png', de: 'n°' + i}
//     });
// };