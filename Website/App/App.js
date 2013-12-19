var omApp = angular.module('om', ['ui.router', 'ui-breadcrumb']);

omApp.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);

omApp.config(function ($breadcrumbProvider) {
    $breadcrumbProvider.setPrefixState('home');
});

omApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
});

omApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
        title: "Home",
        url: "/home",
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

omApp.config(function ($stateProvider, $urlRouterProvider) {
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

omApp.config(function ($stateProvider, $urlRouterProvider) {
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

omApp.config(function ($stateProvider, $urlRouterProvider) {
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

omApp.config(function ($stateProvider, $urlRouterProvider) {
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

omApp.config(function ($stateProvider, $urlRouterProvider) {
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
        data: { parent: "account" }
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

omApp.config(function ($stateProvider, $urlRouterProvider) {
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

omApp.config(function ($stateProvider, $urlRouterProvider) {
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