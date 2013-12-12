var AsideController = function ($scope) {
    $scope.aside = [
        { icon: "search", text: "Search", sref: ".search" },
        { icon: "book", text: "Book", sref: ".book", active: true },
        { icon: "refresh", text: "Refresh", sref: ".refresh" },
        { icon: "adjust", text: "Adjust", sref: ".adjust" },
        { icon: "spinner", text: "Spinner", sref: ".spinner" }
    ];
}