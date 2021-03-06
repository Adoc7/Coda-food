Template.postComPizz.events({

    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };


        Meteor.call('postInsert', post, function(error, result) {
            // affiche l'erreur à l'utilisateur et s'interrompt
            if (error){
                return alert(error.reason);
                //////ERRORS
                // return throwError(error.reason);
            }
            // affiche ce résultat mais route tout de même
            if (result.postExists){
                alert('Ce lien a déjà été utilisé');
                //////ERRORS
                // throwError('Ce lien a déjà été utilisé');
            }
            Router.go('postPage', {_id: result._id});
        });
    }
});