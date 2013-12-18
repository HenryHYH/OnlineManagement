var AsideController = function ($scope, $state, AsideService) {
    $scope.aside = AsideService.Asides($state.current.data ? $state.current.data.parent : "");
}