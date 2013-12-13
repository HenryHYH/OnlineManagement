var AsideController = function ($scope) {
    $scope.aside = [
        { icon: "search", text: "Search", sref: "index.search" },
        { icon: "book", text: "Book", sref: "index.book" },
        { icon: "refresh", text: "Refresh", sref: "index.refresh" },
        { icon: "adjust", text: "Adjust", sref: "index.adjust" },
        { icon: "spinner", text: "Spinner", sref: "index.spinner" }
    ];
}