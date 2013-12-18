var RegisterController = function ($scope, UserService) {
    $scope.register = function () {
        var result = UserService.Register(this.userName, this.password);
        alert(result);
        alert(UserService.current.userName);
    }
}