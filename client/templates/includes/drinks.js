import './drinks.html';

Meteor.subscribe("BoissonsList");

Template.BoissonsList.helpers({
    boissons: function(){return Boissons.find()}
});


