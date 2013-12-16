var NavigateController = function ($scope) {
    $scope.navigateLeft = [
        { icon: "home", text: "Home", sref: "index", children: [] },
        { icon: "about", text: "About", sref: "index.about", children: [] },
        { icon: "dropdown", text: "Dropdown", sref: "index.dropdown", children: [] }
    ];

    $scope.navigateRight = [
        {
            icon: "gears", text: "My account", sref: "index.account", children: [
                { icon: "user", text: "My info", sref: "index.account" },
                { icon: "lock", text: "Reset password", sref: "index.account.resetpassword" }
            ]
        },
        { icon: "power-off", text: "Sign out", sref: "signout" }
    ]
}