/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。 
 * 找出 nums 中的三个整数， 使得它们的和与 target 最接近。 
 * 返回这三个数的和。 
 * 假定每组输入只存在唯一答案。

 来源： 力扣（ LeetCode）
 链接： https: //leetcode-cn.com/problems/3sum-closest
     著作权归领扣网络所有。 商业转载请联系官方授权， 非商业转载请注明出处。
 */


/**
 * 排序 + 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort();
    let len = nums.length;
    let ans = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < len; i++) {
        let start = i  + 1,
            end = len - 1;
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            // 比较两次三数相加的距离
            if (Math.abs(target - sum) < Math.abs(target - ans))
                ans = sum;
            if (sum > target)
                end--;
            else if (sum < target)
                start++;
            else
                return ans
        }
    }
    return ans;
};

console.log(threeSumClosest([1, 2, 7, 4, 5], 11));