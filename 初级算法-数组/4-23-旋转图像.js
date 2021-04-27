/**
 * 给定一个 n× n 的二维矩阵 matrix 表示一个图像。 请你将图像顺时针旋转 90 度。

 你必须在 原地 旋转图像， 这意味着你需要直接修改输入的二维矩阵。 请不要 使用另一个矩阵来旋转图像。

 作者： 力扣(LeetCode)
 链接： https: //leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhhkv/
     来源： 力扣（ LeetCode）
 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
 */

 /**
  * @param {number[][]} matrix
  * @return {void} Do not return anything, modify matrix in-place instead.
  */
 var rotate = function (matrix) {
    let length = matrix.length;
    //先上下交换
    for (let i = 0; i < length / 2; i++) {
        let temp = matrix[i];
        matrix[i] = matrix[length - i - 1];
        matrix[length - i - 1] = temp;
    }
    //在按照对角线交换
    for (let i = 0; i < length; ++i) {
        for (let j = i + 1; j < length; ++j) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
     
 };