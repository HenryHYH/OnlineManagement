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
                //template: "Hello index <a ui-sref='.list'>List</a>"
                templateUrl: "/App/index.html"
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
            }
        }
    });
});

omApp.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);
