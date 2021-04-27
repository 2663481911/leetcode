/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // 1、哈希表
    // let set = new Set();
    // while (head != null) {
    //     if (set.has(head)) return true
    //     set.add(head);
    //     head = head.next;
    // }
    // return false

    ///2、快慢指针（有环的时候，总会相遇（快指针只比慢指针快一步））
    // if (head === null) return false;
    // let fast = head, slow = head;
    // while (fast !== null && fast.next !== null) {
    //     fast = fast.next.next;
    //     slow = slow.next;
    //     if(fast === slow) return true
    // }
    // return false;

    // 3、逐个删除（让自身的next指向自身，当next和自身相等时有环）
    if (head === null) return false;
    if (head === head.next) return true;
    let next = head.next;
    // 当前节点的next指向他自己，相当于把它删除了
    head.next = head;
    return hasCycle(next);

};
// @lc code=end

