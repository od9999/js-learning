/**
 * 递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。
 * 但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。
 */

/**
 * 计算fibonacci 数列，最多需要保存n个调用记录，复杂度 O(n) 。
 * @param n
 * @returns {number}
 */
function Fibonacci(n) {
    if ( n <= 1 ) {
		return 1
    }

    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(10));
