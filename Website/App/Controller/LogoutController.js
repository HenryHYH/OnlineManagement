var LogoutController = function ($scope, $state, $rootScope, UserService) {
    if (UserService.Logout()) {
        $state.go($state.$previousState.name, $state.$previousStateParams);
    }
}