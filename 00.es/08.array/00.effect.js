let arr = [5, -9, 18, 2, 0, 9];
// 影响原数组的方法:
//栈方法
arr.push(7);
arr.pop();

// 队列方法
arr.push();
arr.shift(); // 移除第一个元素
arr.unshift(5); // 头部加入5

// 重排序
arr.reverse();  // 顺序反转
arr.sort();

// 删除、插入、替换 start, deleteCount, ...items
// 删除前2个
arr.splice(0, 2);
// 在第二个位置插入4, 5, 6
arr.splice(2, 0, 4, 5, 6);
// 替换