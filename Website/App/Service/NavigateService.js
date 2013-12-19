omApp.factory("NavigateService", function () {
    return {
        navigates: [
            {
                datas: [
                    { icon: "envelope-o", text: "About", sref: "column-2.about" },
                    { icon: "phone", text: "Contact", sref: "column-2.contact" },
                    {
                        icon: "list", text: "Products", children: [
                            { icon: "android", text: "Product A", sref: "column-2.product.detail", data: { type: "A" } },
                            { icon: "apple", text: "Product B", sref: "column-2.product.detail", data: { type: "B" } },
                            { text: "-" },
                            { icon: "windows", text: "Product C", sref: "column-2.product.detail", data: { type: "C" } },
                            { icon: "github-square", text: "Product D", sref: "column-2.product.detail", data: { type: "D" } },
                        ]
                    },
                    {
                        icon: "list", text: "Hello kitty", children: [
                            { icon: "search", text: "Search", sref: "column-1.search" },
                            { icon: "book", text: "Book", sref: "column-1.book" },
                            { icon: "refresh", text: "Refresh", sref: "column-1.refresh" },
                            { icon: "adjust", text: "Adjust", sref: "column-1.adjust" },
                            { icon: "spinner", text: "Spinner", sref: "column-1.spinner" }
                        ]
                    }
                ]
            },
            {
                position: "right",
                datas: [
                    {
                        icon: "gears", text: "Account", sref: "", children: [
                            { icon: "user", text: "Basic information", sref: "column-2.account" },
                            { icon: "lock", text: "Change password", sref: "column-2.account.resetpassword" },
                            { text: "-" },
                            { icon: "hand-o-right", text: "Feedback", sref: "column-2.account.feedback" }
                        ]
                    },
                    { icon: "power-off", text: "Sign out", sref: "logout" }
                ]
            }
        ]
    };
});