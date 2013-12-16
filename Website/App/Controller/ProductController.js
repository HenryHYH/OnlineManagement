var ProductController = function ($scope, $state, $stateParams) {
    $state.current.title = "Hello " + $stateParams.type;
    $scope.type = $stateParams.type;
}