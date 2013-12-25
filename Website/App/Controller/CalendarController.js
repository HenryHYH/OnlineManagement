﻿var CalendarController = function ($scope) {
    var weekends = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    $scope.time = new Date();
    $scope.weekends = weekends;
    $scope.dates = DatesInCalendar();
}

var DatesInCalendar = function (date) {
    var result = [], dates = [], d = date || new Date();

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