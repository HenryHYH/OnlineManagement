omApp.directive('toggleOffCanvas', function () {
    return {
        restrict: "A",
        link: function link(scope, element, attrs) {
            element.click(function () {
                $("#" + attrs.toggleOffCanvas).toggleClass("active");
                element.children("i").toggleClass("fa-chevron-right");
            });
        }
    };
});