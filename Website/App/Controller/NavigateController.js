var NavigateController = function ($scope, $state) {
    $scope.navigates = [
        {
            datas: [
                { icon: "home", text: "Home", sref: "index" },
                { icon: "envelope-o", text: "About", sref: "index.about" },
                { icon: "phone", text: "Contact", sref: "index.contact" },
                {
                    icon: "list", text: "Products", children: [
                        { icon: "", text: "Product A", sref: "index.product.detail", data: { type: "A" } },
                        { icon: "", text: "Product B", sref: "index.product.detail", data: { type: "B" } },
                        { text: "-" },
                        { icon: "", text: "Product C", sref: "index.product.detail", data: { type: "C" } },
                        { icon: "", text: "Product D", sref: "index.product.detail", data: { type: "D" } },
                    ]
                }
            ]
        },
        {
            position: "right",
            datas: [
                {
                    icon: "gears", text: "My account", sref: "", children: [
                        { icon: "user", text: "Basic information", sref: "index.account" },
                        { icon: "lock", text: "Change password", sref: "index.account.resetpassword" },
                        { text: "-" },
                        { icon: "hand-o-right", text: "Feedback", sref: "index.account.feedback" }
                    ]
                },
                { icon: "power-off", text: "Sign out", sref: "index.book" }
            ]
        }
    ];

    $scope.href = function (value, data) {
        var href = "javascript:void(0);";
        if (value) {
            href = $state.href(value, data);
        }
        return href;
    }
}