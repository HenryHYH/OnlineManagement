var omApp = angular.module('om', ['ui.router', 'ui-breadcrumb']);

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
            "view-nav": {
                templateUrl: "/App/Views/Nav.html"
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
    $stateProvider.state("index.list", {
        title: "Hello index.list title",
        url: "/list",
        views: {
            "@": {
                template: "Hello list <a ui-sref='.detail'>Index</a>"
            },
            "view-nav@": {
                templateUrl: "/App/Views/Nav2.html"
            }
        }
    });
});

omApp.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);
