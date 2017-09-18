Meteor.publish('posts', function() {
    return Posts.find();
});


Meteor.publish('PostsList', function() {
    return Posts.find();
});


Meteor.publish('PizzasList', function() {
    return Pizzas.find();
});

Meteor.publish('SaladesList', function() {
    return Salades.find();
});


Meteor.publish('BurgersList', function() {
    return Burgers.find();
});

Meteor.publish('DessertsList', function() {
    return Desserts.find();
});

Meteor.publish('BoissonsList', function() {
    return Boissons.find();
});





