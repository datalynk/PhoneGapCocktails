(function(cocktails) {
    'use strict';

    
    var currentName, detailsViewModel;

    function init(name) {

       currentName = name;
       detailsViewModel = {
            name: ko.observable(''),
            description: ko.observable(''),
            preparation: ko.observable(''),
            ingredients: ko.observable(''),
            imageUrl: ko.observable('')
       };
       ko.applyBindings(detailsViewModel, $('#cocktail-details-page')[0]);
        
    }

    function bind(){
        $.get( "http://www.mijncocktail.nl/api/cocktails/" + currentName, function( data ) {
            detailsViewModel.name(data.Name);
            detailsViewModel.description(data.Description);
            detailsViewModel.preparation(data.Preparation);
            detailsViewModel.ingredients(data.Ingredients);
            detailsViewModel.imageUrl(data.ImageUrl);
        }); 
    }
    
    cocktails.details = {
        init: init,
        bind: bind
    };

}(window.cocktails = window.cocktails || { }));