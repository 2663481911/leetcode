/**
 * 给定两个数组， 编写一个函数来计算它们的交集。



 示例 1：

 输入： nums1 = [1, 2, 2, 1], nums2 = [2, 2]
 输出：[2, 2]
 示例 2:

     输入： nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
 输出：[4, 9]


 说明：

 输出结果中每个元素出现的次数， 应与元素在两个数组中出现次数的最小值一致。
 我们可以不考虑输出结果的顺序。
 进阶：

 如果给定的数组已经排好序呢？ 你将如何优化你的算法？
 如果 nums1 的大小比 nums2 小很多， 哪种方法更优？
 如果 nums2 的元素存储在磁盘上， 内存是有限的， 并且你不能一次加载所有的元素到内存中， 你该怎么办？

 作者： 力扣(LeetCode)
 链接： https: //leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2y0c2/
     来源： 力扣（ LeetCode）
 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
 */

/**
 * 哈希表
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    let map = new Map();
    let result = [];
    for (const num of nums1) {
        //  保存每个元素到map的key中，并用value标注数量
        if (map[num] != undefined) map[num] += 1
        else map[num] = 1;
    }

    for (const num of nums2) {
        // 存在map中，则result添加
        if (map[num] > 0) {
            result.push(num);
            map[num] -= 1;
        }
    }

    return result
};
/**
 * 排序 + 双指针
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort();
    nums2.sort();
    let len1 = nums1.length,
        len2 = nums2.length,
        index1 = 0,
        index2 = 0,
        index = 0;
    let result = [];
    while (index1 < len1 && index2 < len2) {
        // 如果nums1在index1位置的值大于num2在index2位置的值，index2向后移动一位
        if (nums1[index1] > nums2[index2])
            index2++;
        // 如果nums1在index1位置的值小于num2在index2位置的值，index1向后移动一位
        else if (nums2[index2] > nums1[index1])
            index1++;
        // 如果相等，则代表相同的值，添加到数组result中，并index、index1、index2向后移动一位
        else {
            result[index] = nums1[index1];
            index1++;
            index2++;
            index++;
        }
    }

    return result;

}

console.log(intersect([1, 2, 2, 1],
    [2, 2]));