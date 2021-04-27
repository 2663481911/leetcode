/**
 * 给你一个有序数组 nums， 请你 原地 删除重复出现的元素， 
 * 使每个元素 只出现一次， 返回删除后数组的新长度。
 不要使用额外的数组空间， 你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 作者： 力扣(LeetCode)
 链接： https: //leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2gy9m/
     来源： 力扣（ LeetCode）
 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums == null || nums.length == 0)
        return 0;
    let count = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            count++;
        } else {
            nums[i - count] = nums[i];
        }
    }
    return nums.length - count;
};

var removeDuplicates1 = function (nums) {
    if (nums == null || nums.length == 0)
        return 0;
    let left = 0
    for (let right = 1; right < nums.length; right++) {
         //如果左指针和右指针指向的值一样，说明有重复的，
         //这个时候，左指针不动，右指针继续往右移。如果他俩
         //指向的值不一样就把右指针指向的值往前挪
        if (nums[right] != nums[left]) {
            nums[++left] = nums[right]
        }
    }
    return left
};