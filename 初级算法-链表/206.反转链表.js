/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let [pre, cur] = [null, head];
    while (cur) {
        // 保存正常
        // let cur_next = cur.next;
        // // 后指针指向前指针
        // cur.next = pre;
        // pre = cur;
        // cur = cur_next;
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }

    return pre
};
// @lc code=end

// 递归
var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};


