let Utils = {
    /**
     * 将类似20170601类型的字符串时间转换成Date类型
     * @param dateStr
     * @returns {Date}
     */
    dateStrToDate: (dateStr) => {
        if (dateStr && dateStr.length === 8) {
            let year = dateStr.substring(0, 4);
            let month = dateStr.substring(4, 6);
            let day = dateStr.substring(6, 8);
            let date = new Date();
            date.setDate(day);
            date.setMonth(month - 1);
            date.setFullYear(year);
            return date;
        }
    },
    /**
     * 传入Date()类型参数，传出相应格式字符串
     * @param date
     * @param formatTo
     * @returns {*}
     */
    dateToDateStr: (date, formatTo = 'yyyyMMdd') => {
        return date instanceof Date ? date.format(formatTo) : new Date().format(formatTo);
    },

    /**
     * 传入Date类型，传出对应周几
     * @param date
     * @returns {*}
     */
    getWeekDay(date){
        if (date instanceof Date) {
            let weekd = date.getUTCDay();
            let formated;
            switch (weekd) {
                case 0:
                    formated = '周日';
                    break;
                case 1:
                    formated = '周一';
                    break;
                case 2:
                    formated = '周二';
                    break;
                case 3:
                    formated = '周三';
                    break;
                case 4:
                    formated = '周四';
                    break;
                case 5:
                    formated = '周五';
                    break;
                case 6:
                    formated = '周六';
                    break;
                default:
                    formated = '未知';
                    break;
            }
            return formated;
        }
    },

    /**
     * 传入date类型，传出date类型的前一天相同时候
     * @param dateStr
     */
    getBeforeDate(date){
        return new Date(Date.parse(date) - (24 * 60 * 60 * 1000));
    },
    /**
     * 传入yyyyMMdd格式时间，传出相同格式上一天同时时间
     * @param dateStr
     */
    getBeforeDateStr(dateStr){
        return this.dateToDateStr(this.getBeforeDate(this.dateStrToDate(dateStr)));
    },
    //date 传入为YYYYMMDD
    getSectionDate(date){
        let traDate = this.dateStrToDate(date);
        let week = this.getWeekDay(traDate)
        let month = traDate.getMonth()+1;
        let day = traDate.getDate()
        return month+'月'+day+'日'+week;
    }

};



Date.prototype.format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

export default Utils;