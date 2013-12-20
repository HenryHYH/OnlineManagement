omApp.factory("UserService", function () {
    var current = { userName: "", loginTime: new Date() };
    var users = [
        { userName: "Henry", password: "henry", registerTime: new Date() },
        { userName: "admin", password: "admin", registerTime: new Date() }
    ];

    return {
        user: function () { return current; },
        IsAuthenticated: function () { return !!(current && current.userName) },
        Logout: function () {
            current = { userName: "", loginTime: new Date() };
            return true;
        },
        Login: function (userName, password) {
            var FilterUser = function (val) {
                return val.userName.toLowerCase() === this.userName && val.password === this.password;
            };

            var flag = false;
            if (userName && password) {
                var u = users.filter(FilterUser, { userName: userName.toLowerCase(), password: password });
                if (u.length > 0) {
                    current = { userName: u[0].userName, loginTime: new Date() };
                    flag = true;
                }
            }
            return flag;
        },
        Register: function (userName, password) {
            var IsUserExists = function (val) {
                return val.userName.toLowerCase() === this.userName.toLowerCase();
            }

            var flag = false;
            if (userName && password) {
                if (users.some(IsUserExists, { userName: userName, password: password })) {
                    current = { userName: userName, loginTime: new Date() };
                    users.push({ userName: userName, password: password, registerTime: new Date() });
                    flag = true;
                }
            }
            return flag;
        }
    };
});