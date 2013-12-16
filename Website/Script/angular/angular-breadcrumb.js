/*! angular-breadcrumb - v0.1.0 - 2013-10-23
* https://github.com/ncuillery/angular-breadcrumb
* Copyright (c) 2013 Nicolas Cuillery; Licensed MIT */
angular.module('ui-breadcrumb', ['ui.router.state']).provider('$breadcrumb', function () {

    var options = {};

    this.setPrefixState = function (prefixStateName) {
        options.prefixStateName = prefixStateName;
    };

    var _pushNonexistentState = function (array, state) {
        var stateAlreadyInArray = false;
        angular.forEach(array, function (value) {
            if (!stateAlreadyInArray && angular.equals(value, state)) {
                stateAlreadyInArray = true;
            }
        });
        if (!stateAlreadyInArray) {
            array.push(state);
        }
        return stateAlreadyInArray;
    };

    this.$get = ['$state', function ($state) {

        return {
            getStatesChain: function () {
                var chain = [];

                // Prefix state
                if (options.prefixStateName) {
                    var prefixState = $state.get(options.prefixStateName);
                    if (prefixState) {
                        _pushNonexistentState(chain, prefixState);
                    } else {
                        throw 'Bad configuration : prefixState "' + options.prefixStateName + '" unknown';
                    }
                }

                angular.forEach($state.$current.path, function (value) {
                    _pushNonexistentState(chain, value.self);
                });

                return chain;
            }
        };
    }];

}).directive('uiBreadcrumb', function ($state, $breadcrumb) {
    return function (scope, element) {
        scope.$watch(function () { return $state.current; }, function () {
            var chain = $breadcrumb.getStatesChain();
            var stateNames = [];
            angular.forEach(chain, function (value) {
                stateNames.push({ name: value.breadcrumb || value.title || value.name, sref: value.name });
            });
            //element.text(stateNames.join(' / '));
            scope.breadcrumbs = stateNames;
        }, true);
    };
});
