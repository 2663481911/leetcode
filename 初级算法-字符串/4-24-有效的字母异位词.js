/**
 * 给定两个字符串 s 和 t， 编写一个函数来判断 t 是否是 s 的字母异位词。

 示例 1:

     输入: s = "anagram", t = "nagaram"
 输出: true
 示例 2:

     输入: s = "rat", t = "car"
 输出: false

 作者： 力扣(LeetCode)
 链接： https: //leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn96us/
     来源： 力扣（ LeetCode）
 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
 */

 /**
  * @param {string} s
  * @param {string} t
  * @return {boolean}
  */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const table = new Array(26).fill(0);
    for (let i = 0; i < s.length; ++i) {
        table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
    }
    
    for (let i = 0; i < t.length; ++i) {
        table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
        if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
            return false;
        }
    }
    return true;
};