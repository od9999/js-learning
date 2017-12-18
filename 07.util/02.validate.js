export default {
    isIdentity(id) {
        return /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/.test(id)
            || /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(id);
    },
    isPhoneNum(num) {
        return /^[1][0-9]{10}$/.test(num);
    },
    isChineseName(name) {
        return /^([\u4e00-\u9fa5]){2,20}$/.test(name);
    }
};
