/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // 迭代
    let mergedHead = new ListNode(-1),
        crt = mergedHead;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }

        crt = crt.next;
    }

    crt.next = l1 || l2;

    return mergedHead.next;

   

};
// @lc code=end

var mergeTwoLists = function (l1, l2) {
     // 递归
     if (l1 === null) return l2;
     else if (l2 === null) return l1;
     else if (l1.val < l2.val) {
         l1.next = mergeTwoLists(l1.next, l2);
         return l1;
     } else {
         l2.next = mergeTwoLists(l1, l2.next);
         return l2;
     }
}

