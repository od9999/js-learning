let str = 'a_bc_cde_efgh';

const camelCaseFormat = (str) => {
    let reg = /_./g;
    let match = null;
    let temp = null;
    while(match = reg.exec(str)) {
        temp = match[0];
        str = str.replace(temp, temp.charAt(1).toUpperCase());
    }
    return str;
};

console.log(camelCaseFormat(str));