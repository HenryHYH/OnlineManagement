var AsideController = function ($scope, $state) {
    var aside = [];
    var parent = $state.current.data ? $state.current.data.parent : "";

    if (parent == "account") {
        aside = [
            { icon: "user", text: "Basic information", sref: "index.account" },
            { icon: "lock", text: "Change password", sref: "index.account.resetpassword" },
            { icon: "hand-o-right", text: "Feedback", sref: "index.account.feedback" }
        ];
    }
    else if (parent == "product") {
        aside = [
            { icon: "android", text: "Product A", sref: "index.product.detail({type:'A'})" },
            { icon: "apple", text: "Product B", sref: "index.product.detail({type:'B'})" },
            { icon: "windows", text: "Product C", sref: "index.product.detail({type:'C'})" },
            { icon: "github-square", text: "Product D", sref: "index.product.detail({type:'D'})" }
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