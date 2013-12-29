omApp.directive('toggleOffCanvas', function () {
    return {
        restrict: "A",
        link: function link(scope, element, attrs) {
            element.append('<i class="fa fa-chevron-left"></i>').click(function () {
                $("#" + attrs.toggleOffCanvas).toggleClass("active");
                element.children("i").toggleClass("fa-chevron-right");
            });
        }
    };
});