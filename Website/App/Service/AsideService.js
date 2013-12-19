omApp.factory("AsideService", function () {
    var asides = {
        "account": [
            { icon: "user", text: "Basic information", sref: "column-2.account" },
            { icon: "lock", text: "Change password", sref: "column-2.account.resetpassword" },
            { icon: "hand-o-right", text: "Feedback", sref: "column-2.account.feedback" }
        ],
        "product": [
            { icon: "android", text: "Product A", sref: "column-2.product.detail({type:'A'})" },
            { icon: "apple", text: "Product B", sref: "column-2.product.detail({type:'B'})" },
            { icon: "windows", text: "Product C", sref: "column-2.product.detail({type:'C'})" },
            { icon: "github-square", text: "Product D", sref: "column-2.product.detail({type:'D'})" }
        ],
        "": [
            { icon: "search", text: "Search", sref: "column-2.search" },
            { icon: "book", text: "Book", sref: "column-2.book" },
            { icon: "refresh", text: "Refresh", sref: "column-2.refresh" },
            { icon: "adjust", text: "Adjust", sref: "column-2.adjust" },
            { icon: "spinner", text: "Spinner", sref: "column-2.spinner" }
        ]
    };

    return {
        Asides: function (param) {
            return asides[param];
        }
    };
});