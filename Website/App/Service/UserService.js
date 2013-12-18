omApp.factory("UserService", function () {
    return {
        current: { userName: "Henry", loginTime: new Date() },
        users: [{ userName: "Henry", password: "henry", registerTime: new Date() }, { userName: "admin", password: "admin", registerTime: new Date() }],
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
        },
        Register: function (userName, password) {
            var IsUserExists = function (val) {
                return val.userName.toLowerCase() === this.userName.toLowerCase();
            }

            var flag = false;
            if (userName && password) {
                if (this.users.some(IsUserExists, { userName: userName, password: password })) {
                    this.current = { userName: userName, loginTime: new Date() };
                    this.users.push({ userName: userName, password: password, registerTime: new Date() });
                    flag = true;
                }
            }
            return flag;
        }
    };
});