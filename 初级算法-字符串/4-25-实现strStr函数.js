/**
 * 
 * 实现 strStr() 函数。
 给你两个字符串 haystack 和 needle，
  请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（ 下标从 0 开始）。 
 如果不存在， 则返回 - 1。
 说明：
 当 needle 是空字符串时， 我们应当返回什么值呢？ 这是一个在面试中很好的问题。
 对于本题而言， 当 needle 是空字符串时我们应当返回 0。
 这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

 作者： 力扣(LeetCode)
 链接： https: //leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnr003/
     来源： 力扣（ LeetCode）
 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    let needle_length = needle.length;
    if (needle_length == 0) return 0;
    let cur_pos = 0
    while (cur_pos < haystack.length) {
        if (haystack[pos] == needle[0] && isNeedle(haystack, cur_pos, needle))
            return cur_pos
        else cur_pos++;
    }

    // 判断匹配位置是否是needle字符串
    function isNeedle(haystack, cur_pos, needle) {
        let pos = cur_pos;
        for (let i = 0; i < needle.length; i++) {
            if (haystack[pos] != needle[i]) return false
            else pos++;
        }
        return true
    }
};



/**
 * KMP算法
 * @param {*} haystack 
 * @param {*} needle 
 * @returns 
 */
var strStr = function (haystack, needle) {
    let next = kmpNext(needle);
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] != needle[j])
            j = next[j - 1];
        if (haystack[i] == needle[j])
            j++;
        if (j == needle.length)
            return i - needle.length + 1;
    }
    return -1;
}

function kmpNext(pattern) {
    let next = new Array(pattern.length).fill(0);
    // 相同字符出现的个数
    let j = 0;
    for (let i = 1; i < pattern.length; i++) {
        while (j != 0 && pattern[i] != pattern[j]) {
            j = next[j - 1];
        }

        // j位置j和当前i位置的字符相同，继续匹配i+1和j+1位
        if (pattern[i] === pattern[j]) j++;
        next[i] = j;
    }
    return next
}

console.log(strStr("ababbb", 'ab'));