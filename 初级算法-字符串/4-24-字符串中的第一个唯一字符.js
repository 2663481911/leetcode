/**
 * 字符串中的第一个唯一字符
 * 给定一个字符串， 找到它的第一个不重复的字符， 并返回它的索引。 如果不存在， 则返回 - 1。

 示例：
 s = "leetcode"
 返回 0

 s = "loveleetcode"
 返回 2

 提示： 你可以假定该字符串只包含小写字母。
 作者： 力扣(LeetCode)
 链接： https: //leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn5z8r/
     来源： 力扣（ LeetCode）
 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    
    let map = new Map();


    for (let i = 0; i < s.length; i++) {
        let chat = s[i];
        if (map[chat] == undefined) map[chat] = 1;
        else map[chat] += 1;
    }

     for (let i = 0; i < s.length; i++) {
         let chat = s[i];
        if(map[chat] == 1) return i
    }

    return -1;
};

var firstUniqChar = function (s) {
    const table = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++){
        // codePointAt() 方法返回 一个 Unicode 编码点值的非负整数。
        // 返回值是在字符串中的给定索引的编码单元体现的数字，如果在索引处没找到元素则返回 undefined 。
        // s.codePointAt(i) - 'a'.codePointAt(0) 范围为 0-25
        table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
    }


    for (let i = 0; i < s.length; i++) {
        if (table[s.codePointAt(i) - 'a'.codePointAt(0)] == 1)  return i;
    }
    return -1;
}

console.log(firstUniqChar("loveleetcode"));