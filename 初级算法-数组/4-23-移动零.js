/**
 * 给定一个数组 nums， 编写一个函数将所有 0 移动到数组的末尾， 同时保持非零元素的相对顺序。

 示例:

     输入: [0, 1, 0, 3, 12]
 输出: [1, 3, 12, 0, 0]
 说明:

     必须在原数组上操作， 不能拷贝额外的数组。
 尽量减少操作次数。

 作者： 力扣(LeetCode)
 链接： https: //leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2ba4i/
     来源： 力扣（ LeetCode）
 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // 记录0的个数
    let count = 0;
    for (const i in nums) {
        if (nums[i] == 0) count++;
        // 不是0的往前移动count个位置，并把当前位置设置为0
        else if (count != 0) {
            nums[i - count] = nums[i];
            nums[i] = 0;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let len = nums.length,
        right = 0, left = 0;
     while (right < len) {
         if (nums[right] != 0) {
             swap(nums, left, right);
             left++;
         }
         right++;
    }

    console.log(nums);
    
    function swap(nums, left, right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
    }
};

moveZeroes([0, 1, 0, 2, 3])