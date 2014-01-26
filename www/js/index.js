(function(cocktails) {
    'use strict';

    
    var viewModel;

    function init() {

        viewModel = { cocktails: ko.observableArray([]) }
        ko.applyBindings(viewModel, $('#cocktail-list-page')[0]);

       
        $.get( "http://www.mijncocktail.nl/api/cocktails", function( data ) {
            viewModel.cocktails(data);

            $('#cocktail-list').listview("refresh"); 
        }); 

        $( document ).on( "pageshow", "#cocktail-details-page", function( event ) {
          cocktails.details.bind();
        });

       $(document).on('pagebeforeshow', "#cocktail-details-page", function (e, data) {
            
            var parameters = $(this).data("url").split("?")[1];
            var cocktailName = parameters.replace("name=","");

            cocktails.details.init(cocktailName);
        }); 
    }

    
    cocktails.home = {
        init: init
    };

}(window.cocktails = window.cocktails || { }));