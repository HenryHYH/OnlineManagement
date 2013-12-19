omApp.factory("NavigateService", function () {
    return {
        navigates: [
            {
                datas: [
                    { icon: "envelope-o", text: "About", sref: "index.about" },
                    { icon: "phone", text: "Contact", sref: "index.contact" },
                    {
                        icon: "list", text: "Products", children: [
                            { icon: "android", text: "Product A", sref: "index.product.detail", data: { type: "A" } },
                            { icon: "apple", text: "Product B", sref: "index.product.detail", data: { type: "B" } },
                            { text: "-" },
                            { icon: "windows", text: "Product C", sref: "index.product.detail", data: { type: "C" } },
                            { icon: "github-square", text: "Product D", sref: "index.product.detail", data: { type: "D" } },
                        ]
                    }
                ]
            },
            {
                position: "right",
                datas: [
                    {
                        icon: "gears", text: "Account", sref: "", children: [
                            { icon: "user", text: "Basic information", sref: "index.account" },
                            { icon: "lock", text: "Change password", sref: "index.account.resetpassword" },
                            { text: "-" },
                            { icon: "hand-o-right", text: "Feedback", sref: "index.account.feedback" }
                        ]
                    },
                    { icon: "power-off", text: "Sign out", sref: "index.book" }
                ]
            }
        ]
    };
});