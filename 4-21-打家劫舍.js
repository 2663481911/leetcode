/**
 * 你是一个专业的小偷， 计划偷窃沿街的房屋。 
 * 每间房内都藏有一定的现金， 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统， 
 * 如果两间相邻的房屋在同一晚上被小偷闯入， 系统会自动报警。
 给定一个代表每个房屋存放金额的非负整数数组， 计算你不触动警报装置的情况下， 
 一夜之内能够偷窃到的最高金额。



 示例 1：

 输入：[1, 2, 3, 1]
 输出： 4
 解释： 偷窃 1 号房屋(金额 = 1)， 然后偷窃 3 号房屋(金额 = 3)。
 偷窃到的最高金额 = 1 + 3 = 4。
 示例 2：

 输入：[2, 7, 9, 3, 1]
 输出： 12
 解释： 偷窃 1 号房屋(金额 = 2), 偷窃 3 号房屋(金额 = 9)， 接着偷窃 5 号房屋(金额 = 1)。
 偷窃到的最高金额 = 2 + 9 + 1 = 12。

 来源： 力扣（ LeetCode）
 链接： https: //leetcode-cn.com/problems/house-robber
     著作权归领扣网络所有。 商业转载请联系官方授权， 非商业转载请注明出处。
 */

function maxMoney(nums, index) {
    if (nums == null || index < 0)
        return 0;
    if (index == 0)
        return nums[0];
    // 会有重复计算
    return Math.max(maxMoney(nums, index - 1), maxMoney(nums, index - 2) + nums[index])
}

function maxMoney1(nums) {
    let len = nums.length
    if (nums == null || len == 0)
        return 0;
    if (len == 1)
        return nums[0];
    if (len == 2) 
        return Math.max(nums[0], nums[1])

    let previous = nums[0];
    let max = nums[1];
    for (let i = 2; i < len; i++) {
        let temp = max;
        max = Math.max(max, previous + nums[i])
        
        if (i == 2 && previous > temp){}
        else
        previous = temp

    }

    return max;
}

console.log(maxMoney1([1, 2, 3, 1]));