var NavigateController = function ($scope) {
    $scope.navigateLeft = [
        { icon: "home", text: "Home", sref: "index", children: [] },
        { icon: "about", text: "About", sref: "index.about", children: [] },
        { icon: "dropdown", text: "Dropdown", sref: "index.dropdown", children: [] }
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