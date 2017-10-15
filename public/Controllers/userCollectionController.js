movieApp.controller('userCollectionController', function ($scope, MovieService) {

    var years = [];
    for (var i = 1960; i <= 2017; i++) {
        years.push(i)
    }

    $scope.enableRemove = false;

    $scope.showRemoveOption = function () {
        if ($scope.enableRemove) {
            $scope.enableRemove = false;
        } else {
            $scope.enableRemove = true;
        }
    }

    $scope.removeFromUserCollection = function(movie) {
        MovieService.removeFromUserCollection(movie);
    }

    $scope.years = years;
    $scope.budget = MovieService.budget;
    $scope.movies = MovieService.getUserCollection();
});