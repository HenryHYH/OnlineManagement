var ClockController = function ($scope) {
    var UpdateTime = function () {
        $scope.date = new Date();
        //alert("A");
    };

    UpdateTime();

    var timer = setInterval(function () {
        $scope.$apply(UpdateTime);
    }, 1000);
};