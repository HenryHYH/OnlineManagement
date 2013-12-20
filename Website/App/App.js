var omApp = angular.module('om', ['ui.router', 'ui-breadcrumb']);

// Global variable
omApp.run(function ($rootScope, $state, $stateParams, $location, UserService) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    // Set previous state when state changed
    $rootScope.$on('$stateChangeSuccess', function (event, to, toParams, from, fromParams) {
        var state = $rootScope.$state;
        state.$previousState = from;
        $rootScope.$state = state;
    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (toState.data && toState.data.authenticated && !UserService.IsAuthenticated()) {
            event.preventDefault();
            $state.go("home");

        }
    });
});

// Default breadcrumb
omApp.config(function ($breadcrumbProvider) {
    $breadcrumbProvider.setPrefixState('home');
});

// Default route
omApp.config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    //$locationProvider.html5Mode(true);
});

// Home
omApp.config(function ($stateProvider) {
    $stateProvider.state("home", {
        title: "Home",
        url: "/",
        views: {
            "": {
                templateUrl: "/App/View/Home.html"
            },
            "view-navigate": {
                templateUrl: "/App/View/Navigate.html",
                controller: "NavigateController"
            }
        }
    });
});

// Logout
omApp.config(function ($stateProvider) {
    $stateProvider.state("logout", {
        url: "/logout",
        controller: "LogoutController"
    });
});

// Column-2 layout
omApp.config(function ($stateProvider) {
    $stateProvider.state("column-2", {
        abstract: true,
        views: {
            "": {
                templateUrl: "/App/Layout/Column-2.html"
            },
            "view-navigate": {
                templateUrl: "/App/View/Navigate.html",
                controller: "NavigateController"
            }
        }
    });
});

// About
omApp.config(function ($stateProvider) {
    $stateProvider.state("column-2.about", {
        url: "^/about",
        breadcrumb: "About",
        views: {
            "": {
                template: "About"
            },
            "view-aside": {
                templateUrl: "/App/View/Aside.html",
                controller: "AsideController"
            }
        }
    });
});

// Contact
omApp.config(function ($stateProvider) {
    $stateProvider.state("column-2.contact", {
        url: "^/contact",
        breadcrumb: "Contact",
        views: {
            "": {
                template: "Contact"
            },
            "view-aside": {
                templateUrl: "/App/View/Aside.html",
                controller: "AsideController"
            }
        }
    });
});

// Product
omApp.config(function ($stateProvider) {
    $stateProvider.state("column-2.product", {
        url: "^/product",
        breadcrumb: "Products",
        views: {
            "": {
                template: "Products"
            },
            "view-aside": {
                templateUrl: "/App/View/Aside.html",
                controller: "AsideController"
            }
        },
        data: { parent: "product" }
    }).state("column-2.product.detail", {
        url: "/:type",
        views: {
            "@column-2": {
                templateUrl: "/App/View/Product.html",
                controller: "ProductController"
            }
        }
    });
});

// Account
omApp.config(function ($stateProvider) {
    $stateProvider.state("column-2.account", {
        url: "^/account",
        breadcrumb: "Account",
        views: {
            "": {
                template: "My account"
            },
            "view-aside": {
                templateUrl: "/App/View/Aside.html",
                controller: "AsideController"
            }
        },
        data: { parent: "account", authenticated: true }
    }).state("column-2.account.resetpassword", {
        url: "/resetpassword",
        breadcrumb: "Change password",
        views: {
            "@column-2": {
                template: "Reset password"
            }
        }
    }).state("column-2.account.feedback", {
        url: "/feedback",
        breadcrumb: "Feedback",
        views: {
            "@column-2": {
                template: "Feedback"
            }
        }
    });
});

// Column-1 layout
omApp.config(function ($stateProvider) {
    $stateProvider.state("column-1", {
        abstract: true,
        views: {
            "": {
                templateUrl: "/App/Layout/Column-1.html"
            },
            "view-navigate": {
                templateUrl: "/App/View/Navigate.html",
                controller: "NavigateController"
            }
        }
    });
});

// Hello kitty
omApp.config(function ($stateProvider) {
    $stateProvider.state("column-1.search", {
        url: "/search",
        views: {
            "": {
                template: "Search"
            }
        }
    }).state("column-1.book", {
        url: "/book",
        views: {
            "": {
                template: "Book"
            }
        }
    }).state("column-1.refresh", {
        url: "/refresh",
        views: {
            "": {
                template: "Refresh"
            }
        }
    }).state("column-1.adjust", {
        url: "/adjust",
        views: {
            "": {
                template: "Adjust"
            }
        }
    }).state("column-1.spinner", {
        url: "/spinner",
        views: {
            "": {
                template: "Spinner"
            }
        }
    });
});