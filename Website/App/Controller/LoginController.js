var LoginController = function ($scope, UserService) {
    $scope.login = function () {
        var result = UserService.Login({ userName: this.userName, password: this.password });
    }
}