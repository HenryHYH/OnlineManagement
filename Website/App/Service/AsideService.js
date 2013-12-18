omApp.factory("AsideService", function () {
    var asides = {
        "account": [
            { icon: "user", text: "Basic information", sref: "index.account" },
            { icon: "lock", text: "Change password", sref: "index.account.resetpassword" },
            { icon: "hand-o-right", text: "Feedback", sref: "index.account.feedback" }
        ],
        "product": [
            { icon: "android", text: "Product A", sref: "index.product.detail({type:'A'})" },
            { icon: "apple", text: "Product B", sref: "index.product.detail({type:'B'})" },
            { icon: "windows", text: "Product C", sref: "index.product.detail({type:'C'})" },
            { icon: "github-square", text: "Product D", sref: "index.product.detail({type:'D'})" }
        ],
        "": [
            { icon: "search", text: "Search", sref: "index.search" },
            { icon: "book", text: "Book", sref: "index.book" },
            { icon: "refresh", text: "Refresh", sref: "index.refresh" },
            { icon: "adjust", text: "Adjust", sref: "index.adjust" },
            { icon: "spinner", text: "Spinner", sref: "index.spinner" }
        ]
    };

    return {
        Asides: function (param) {
            return asides[param];
        }
    };
});