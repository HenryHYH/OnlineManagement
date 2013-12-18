var omApp = angular.module('om', ['ui.router', 'ui-breadcrumb']);

omApp.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);

omApp.config(function ($breadcrumbProvider) {
    $breadcrumbProvider.setPrefixState('index');
});

omApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");
});

omApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("index", {
        title: "Hello index title",
        breadcrumb: "Home",
        url: "/index",
        views: {
            "@": {
                templateUrl: "/App/index.html"
            },
            "view-aside@": {
                templateUrl: "/App/View/Aside.html",
                controller: "AsideController",
                data: { parent: "index" }
            },
            "view-navigate@": {
                templateUrl: "/App/View/Navigate.html",
                controller: "NavigateController"
            }
        }
    });
});

omApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("index.search", {
        url: "/search",
        views: {
            "@": {
                template: "Search"
            }
        }
    }).state("index.book", {
        url: "/book",
        views: {
            "@": {
                template: "Book"
            }
        }
    }).state("index.refresh", {
        url: "/refresh",
        views: {
            "@": {
                template: "Refresh"
            }
        }
    }).state("index.adjust", {
        url: "/adjust",
        views: {
            "@": {
                template: "Adjust"
            }
        }
    }).state("index.spinner", {
        url: "/spinner",
        views: {
            "@": {
                template: "Spinner"
            }
        }
    });
});

omApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("index.about", {
        url: "^/about",
        breadcrumb: "About",
        views: {
            "@": {
                template: "About"
            }
        }
    });
});

omApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("index.contact", {
        url: "^/contact",
        breadcrumb: "Contact",
        views: {
            "@": {
                template: "Contact"
            }
        }
    });
});

omApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("index.product", {
        url: "^/product",
        breadcrumb: "Products",
        views: {
            "@": {
                template: "Products"
            }
        }
    }).state("index.product.detail", {
        url: "/:type",
        views: {
            "@": {
                templateUrl: "/App/View/Product.html",
                controller: "ProductController"
            }
        }
    });
});

omApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("index.account", {
        url: "^/account",
        breadcrumb: "Account",
        views: {
            "@": {
                template: "My account"
            },
            "view-aside@": {
                templateUrl: "/App/View/Aside.html",
                controller: "AsideController",
                data: { parent: "account" }
            }
        }
    }).state("index.account.resetpassword", {
        url: "/resetpassword",
        breadcrumb: "Change password",
        views: {
            "@": {
                template: "Reset password"
            }
        }
    }).state("index.account.feedback", {
        url: "/feedback",
        breadcrumb: "Feedback",
        views: {
            "@": {
                template: "Feedback"
            }
        }
    });
});