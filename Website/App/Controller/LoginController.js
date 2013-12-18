var LoginController = function ($scope, UserService) {
    $scope.login = function () {
        alert(UserService.current.userName);
        var result = UserService.Login(this.userName, this.password);
        alert(result);
        alert(UserService.current.userName);
    }
}