/**
 * 验证是否1-10个汉字
 * @param str
 * @returns {boolean}
 */
function isChineseWord(str) {
	return /^[\u4e00-\u9fa5]{1,10}$/.test(str);
}
console.log(isChineseWord('哈哈哈哈'));