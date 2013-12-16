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
                controller: "AsideController"
            },
            "view-navigate@": {
                templateUrl: "/App/View/Navigate.html",
                controller: "NavigateController"
            }
        }
    }).state("index.list", {
        title: "Hello index.list title",
        url: "/list",
        views: {
            "@": {
                template: "Hello list <a ui-sref='.detail'>Index</a>"
            },
            "view-aside@": {
                templateUrl: "/App/View/Aside2.html"
            }
        }
    }).state("index.list.detail", {
        breadcrumb: "Detail",
        url: "/detail",
        views: {
            "@": {
                template: "Hello detail <a ui-sref='index'>Index</a>"
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