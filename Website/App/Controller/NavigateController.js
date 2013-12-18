var NavigateController = function ($scope, $state, NavigateService, UserService) {
    $scope.userName = UserService.current.userName;

    $scope.navigates = NavigateService.navigates;

    $scope.href = function (value, data) {
        var href = "javascript:void(0);";
        if (value) {
            href = $state.href(value, data);
        }
        return href;
    }
}