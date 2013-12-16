var AsideController = function ($scope, $state) {
    var aside = [];
    var parent = $state.current.views["view-aside@"].data.parent;

    if (parent == "account") {
        aside = [
            { icon: "user", text: "Basic information", sref: "index.account" },
            { icon: "lock", text: "Change password", sref: "index.account.resetpassword" },
            { icon: "hand-o-right", text: "Feedback", sref: "index.account.feedback" }
        ];
    }
    else {
        aside = [
            { icon: "search", text: "Search", sref: "index.search" },
            { icon: "book", text: "Book", sref: "index.book" },
            { icon: "refresh", text: "Refresh", sref: "index.refresh" },
            { icon: "adjust", text: "Adjust", sref: "index.adjust" },
            { icon: "spinner", text: "Spinner", sref: "index.spinner" }
        ];
    }

    $scope.aside = aside;
}