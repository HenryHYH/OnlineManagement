var LoginController = function ($scope, UserService) {
    $scope.login = function () {
        var result = UserService.Login(this.userName, this.password);
    }
}