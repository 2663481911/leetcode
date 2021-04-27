/**
 * 给定一个数组， 将数组中的元素向右移动 k 个位置， 其中 k 是非负数。

 进阶：
 尽可能想出更多的解决方案， 至少有三种不同的方法可以解决这个问题。
 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？


 示例 1:

     输入: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
 输出: [5, 6, 7, 1, 2, 3, 4]
 解释:
     向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
 向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
 向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]
 示例 2:

     输入： nums = [-1, -100, 3, 99], k = 2
 输出：[3, 99, -1, -100]
 解释:
     向右旋转 1 步: [99, -1, -100, 3]
 向右旋转 2 步: [3, 99, -1, -100]

 作者： 力扣(LeetCode)
 链接： https: //leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2skh7/
     来源： 力扣（ LeetCode）
 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
 */


/**
 * 1. 自己的，一个一个的移动
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let len = nums.length;
    if (k > len) k %= len;
    if(k == 0) return
    nums.length = len + k;
    let new_len = len + k;
    for (let i = 1; i <= new_len; i++){
        if (i <= len)
            nums[new_len - i] = nums[len - i];
         else 
            nums[i - len - 1] = nums[i - 1];
    }
    nums.length = nums.length - k;
};


/**
 * 2. 反转数组
 * @param {*} nums 
 * @param {*} start 
 * @param {*} end 
 */
const reverse = (nums, start, end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start += 1;
        end -= 1;
    }
}

var rotate = function (nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);

    console.log(nums);
};

/**
 * 3. 使用额外的数组
 * @param {*} nums 
 * @param {*} k 
 */
var rotate = function (nums, k) {
    const n = nums.length;
    const newArr = new Array(n);
    for (let i = 0; i < n; ++i) {
        newArr[(i + k) % n] = nums[i];
    }
    for (let i = 0; i < n; ++i) {
        nums[i] = newArr[i];
    }
};

/**
 * 
 * 4. 环状替换
 */
const gcd = (x, y) => y ? gcd(y, x % y) : x;
var rotate = function (nums, k) {
    const n = nums.length;
    k = k % n;
    let count = gcd(k, n);
    for (let start = 0; start < count; ++start) {
        let current = start;
        let prev = nums[start];
        do {
            const next = (current + k) % n;
            const temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
        } while (start !== current);
    }
};


rotate([1, 2, 3, 4], 5);