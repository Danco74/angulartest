movieApp.controller('moviesController', function($scope, MovieService) {
    
        $scope.movies = MovieService.getMovieCollection();
        
        $scope.addToUserCollection = function(movie){
            MovieService.addToCollection(movie);
        }	
    });