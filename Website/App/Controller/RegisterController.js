var RegisterController = function ($scope, $modal) {
    $scope.open = function () {
        $modal.open({
            templateUrl: "/App/View/Register.html",
            controller: "RegisterInstanceController"
        });
    };
}

var RegisterInstanceController = function ($scope, $modalInstance, UserService) {
    $scope.close = function () {
        $modalInstance.dismiss();
    }
    $scope.register = function () {
        if (UserService.Register({ userName: this.name, password: this.password, email: this.email })) {
            close();
        }
    }
}