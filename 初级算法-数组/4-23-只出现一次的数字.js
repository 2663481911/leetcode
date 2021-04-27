
/**
 * 给定一个非空整数数组， 除了某个元素只出现一次以外， 其余每个元素均出现两次。 找出那个只出现了一次的元素。

 说明：

 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

 作者： 力扣(LeetCode)
 链接： https: //leetcode-cn.com/leetbook/read/top-interview-questions-easy/x21ib6/
     来源： 力扣（ LeetCode）
 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
 */

/**
 * 使用异或运算， 将所有值进行异或
 异或运算， 相异为真， 相同为假， 
 所以 a ^ a = 0;0 ^ a = a
 因为异或运算 满足交换律 a ^ b ^ a = a ^ a ^ b = b 所以数组经过异或运算， 单独的值就剩下了
 */

 /**
  * @param {number[]} nums
  * @return {number}
  */
var singleNumber = function (nums) {
    let reduce = 0;
     for (const num of nums) {
         reduce ^= num;
    }

    return reduce
};
 

console.log(singleNumber([1, 2, 1, 3, 2]));