var LoginController = function ($scope, user) {
    $scope.login = function () {
        var userName = this.userName, password = this.password;
        if (userName && password) {
            if (user.every(function (value) { return value.userName.toLowerCase() !== userName.toLowerCase(); })) {
                user.push({ userName: this.userName, loginTime: new Date() });
            }
        }
    }
}