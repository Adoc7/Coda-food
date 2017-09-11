// import { Template } from 'meteor/templating';


//
import './drinks.html';
Template.drinkPhot.prod1 = function() {
    return _.map(_.range(1, 7), function(i) {
        return {url: 'bo' + i + '.png', bo: 'n°'+i}
            });
};

