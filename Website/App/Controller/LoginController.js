var LoginController = function ($scope) {
    $scope.login = function () {
        alert(this.name + " " + this.password + " Login.");
    }
}