omApp.factory("UserService", function () {
    return {
        current: { userName: "Henry", loginTime: new Date() },
        users: [{ userName: "Henry", loginTime: new Date() }, { userName: "admin", loginTime: new Date() }],
        Login: function (userName, password) {
            var flag = false;
            if (userName && password) {
                if (userName.toLowerCase() === password.toLowerCase() && this.users.some(function (val) { return val.userName.toLowerCase() === userName.toLowerCase() })) {
                    this.current = { userName: userName, loginTime: new Date() };
                    flag = true;
                }
            }
            return flag;
        }
    };
});