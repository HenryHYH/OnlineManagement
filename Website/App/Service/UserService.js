omApp.factory("UserService", function () {
    return {
        current: { userName: "Henry", loginTime: new Date() },
        users: [{ userName: "Henry", password: "henry", loginTime: new Date() }, { userName: "admin", password: "admin", loginTime: new Date() }],
        Login: function (userName, password) {
            var FilterUser = function (val) {
                return val.userName.toLowerCase() === this.userName && val.password === this.password;
            };

            var flag = false;
            if (userName && password) {
                var u = this.users.filter(FilterUser, { userName: userName.toLowerCase(), password: password });
                if (u.length > 0) {
                    this.current = { userName: u[0].userName, loginTime: new Date() };
                    flag = true;
                }
            }
            return flag;
        }
    };
});