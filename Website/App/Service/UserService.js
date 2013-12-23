omApp.factory("UserService", function (ipCookie) {
    var current = { userName: "", loginTime: new Date() };
    var users = [
        { userName: "Henry", password: "henry", registerTime: new Date() },
        { userName: "admin", password: "admin", registerTime: new Date() }
    ];

    return {
        user: function () {
            if (!current || !current.userName) {
                current = ipCookie('user');
            }
            return current;
        },
        IsAuthenticated: function () { return !!(this.user() && this.user().userName) },
        Logout: function () {
            current = { userName: "", loginTime: new Date() };
            ipCookie.remove("user");
            return true;
        },
        Login: function (info) {
            var userName = info.userName, password = info.password;
            var FilterUser = function (val) {
                return val.userName.toLowerCase() === this.userName && val.password === this.password;
            };

            var flag = false;
            if (userName && password) {
                var u = users.filter(FilterUser, { userName: userName.toLowerCase(), password: password });
                if (u.length > 0) {
                    current = { userName: u[0].userName, loginTime: new Date() };
                    ipCookie("user", current, { expires: 7 });
                    flag = true;
                }
            }
            return flag;
        },
        Register: function (info) {
            var userName = info.userName, password = info.password, email = info.email;
            var IsUserExists = function (val) {
                return val.userName.toLowerCase() === this.userName.toLowerCase();
            }

            var flag = false;
            if (userName && password) {
                if (!users.some(IsUserExists, { userName: userName, password: password })) {
                    current = { userName: userName, loginTime: new Date() };
                    ipCookie("user", current, { expires: 7 });
                    users.push({ userName: userName, password: password, registerTime: new Date() });
                    flag = true;
                }
            }
            return flag;
        }
    };
});