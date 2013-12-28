var CalendarController = function ($scope) {
    var weekends = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    $scope.weekends = weekends;

    var months = [
        [{ text: "Jan", value: 0 }, { text: "Feb", value: 1 }, { text: "Mar", value: 2 }, { text: "Apr", value: 3 }],
        [{ text: "May", value: 4 }, { text: "Jun", value: 5 }, { text: "Jul", value: 6 }, { text: "Aug", value: 7 }],
        [{ text: "Sep", value: 8 }, { text: "Oct", value: 9 }, { text: "Nov", value: 10 }, { text: "Dec", value: 11 }]
    ];
    $scope.months = months;

    // Set mode ["date", "month"]
    $scope.setMode = function (newMode) {
        if (newMode === "month") {
            this.mode = "month";
            this.format = "yyyy";
        }
        else {
            this.mode = "date";
            this.format = "MMMM yyyy";
        }
    }

    // Toggle mode ["date", "month"]
    $scope.toggleMode = function () {
        if (this.mode === "month") {
            $scope.setMode("date");
        }
        else {
            $scope.setMode("month");
        }
    }
    $scope.toggleMode();

    $scope.setTime = function (date) {
        date = date || new Date();
        $scope.time = date;
        $scope.dates = date.DatesInCalendar();
    }
    $scope.setTime();

    $scope.next = function () {
        if (this.mode === "date") {
            this.time.addMonths(1);
        }
        else {
            this.time.addYears(1);
        }
        $scope.setTime(this.time);
    }

    $scope.prev = function () {
        if (this.mode === "date") {
            this.time.addMonths(-1);
        }
        else {
            this.time.addYears(-1);
        }
        $scope.setTime(this.time);
    }

    $scope.setMonth = function (value) {
        var n = this.time.getDate();
        this.time.setDate(1);
        this.time.setMonth(value);
        this.time.setDate(Math.min(n, this.time.getDaysInMonth()));
        $scope.setMode("date");
        $scope.setTime(this.time);
    }
}

Date.prototype.DatesInCalendar = function () {
    var result = [], dates = [], d = new Date(this.getFullYear(), this.getMonth());

    d.setDate(0);
    var lastMonthLastDate = d.getDate();

    d.setMonth(d.getMonth() + 1, 1);
    var lastMonthDateCount = d.getDay(); // 0 is SUN
    if (lastMonthDateCount === 0) lastMonthDateCount = 7;

    for (var i = 0; i < lastMonthDateCount; i++) {
        dates.unshift({ date: lastMonthLastDate--, isInCurrentMonth: false });
    }

    var datesInThisMonth = d.getDaysInMonth();
    var isInCurrentMonth = true;
    for (var da = 1, i = 1, iMax = 42 - lastMonthDateCount; i <= iMax; i++) {
        if (dates.length === 7) {
            result.push(dates);
            dates = [];
        }
        dates.push({ date: da++, isInCurrentMonth: isInCurrentMonth });
        if (da > datesInThisMonth) {
            da -= datesInThisMonth;
            isInCurrentMonth = false;
        }
    }
    result.push(dates);

    return result;
}

Date.isLeapYear = function (year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
};

Date.getDaysInMonth = function (year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

Date.prototype.isLeapYear = function () {
    var y = this.getFullYear();
    return (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0));
};

Date.prototype.getDaysInMonth = function () {
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};

Date.prototype.addMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};

Date.prototype.addYears = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setFullYear(this.getFullYear() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};