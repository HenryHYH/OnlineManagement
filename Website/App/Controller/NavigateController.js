var NavigateController = function ($scope) {
    $scope.navigateLeft = [
        { icon: "home", text: "Home", sref: "index" },
        { icon: "envelope-o", text: "About", sref: "index.about" },
        { icon: "phone", text: "Contact", sref: "index.contact" },
        {
            icon: "list", text: "Products", sref: "index.product", children: [
                { icon: "", text: "Product A", sref: "index.product.detail({type:'A'})" },
                { icon: "", text: "Product B", sref: "index.product.detail({type:'B'})" },
                { text: "-" },
                { icon: "", text: "Product C", sref: "index.product.detail({type:'C'})" },
                { icon: "", text: "Product D", sref: "index.product.detail({type:'D'})" },
            ]
        }
    ];

    $scope.navigateRight = [
        {
            icon: "gears", text: "My account", sref: "index.account", children: [
                { icon: "user", text: "Basic information", sref: "index.account" },
                { icon: "lock", text: "Change password", sref: "index.account.resetpassword" },
                { text: "-" },
                { icon: "hand-o-right", text: "Feedback", sref: "index.account.feedback" }
            ]
        },
        { icon: "power-off", text: "Sign out", sref: "index.book" }
    ]
}