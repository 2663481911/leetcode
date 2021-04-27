/**
请你判断一个 9 x9 的数独是否有效。 只需要 根据以下规则， 验证已经填入的数字是否有效即可。

数字 1 - 9 在每一行只能出现一次。
数字 1 - 9 在每一列只能出现一次。
数字 1 - 9 在每一个以粗实线分隔的 3 x3 宫内只能出现一次。（ 请参考示例图）
数独部分空格内已填入了数字， 空白格用 '.'
表示。

注意：

一个有效的数独（ 部分已被填充） 不一定是可解的。
只需要根据以上规则， 验证已经填入的数字是否有效即可。

作者： 力扣(LeetCode)
链接： https: //leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2f9gg/
    来源： 力扣（ LeetCode）
著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
 */


var isValidSudoku = function (board) {
    let set = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const number = board[i][j];
            if (number === '.') continue;
            // 标记位置
            const colStr = `${number}c${i}`;    // 第几列
            const rowStr = `${number}r${j}`;    // 第几行
            // 第几块
            const sectionStr = `${number}s(${Math.floor(i / 3)},${Math.floor(j / 3)})`;
            // 行列块 是否存在
            if (set.has(colStr) || set.has(rowStr) || set.has(sectionStr)) return false;
            set.add(colStr);
            set.add(rowStr);
            set.add(sectionStr);
        }
    }
    return true;
};




console.log(isValidSudoku([
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", "4", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
]));