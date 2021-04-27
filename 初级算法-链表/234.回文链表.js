/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 快慢指针找到中点, fast一下走两步，slow走一步；
    let fast = head, slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // fast不为空（fast.next为空），链表节点个数为奇数
    if(fast!= null) slow = slow.next;
    slow = reversal(slow);
    while (slow) {
        if (slow.val === head.val) {
            slow = slow.next;
            head = head.next;
        } else {
            return false;
        }
    }

    return true

};


// 反转链表
function reversal(head) {
    let  pre = null;
    while (head) {
        [head.next, head, pre] = [pre, head.next, head];
    }
    return pre;
}
// @lc code=end

// 递归
let frontPointer;
var isPalindrome = function (head) {
    frontPointer = head;
    return recursivelyCheck(head)
}

function recursivelyCheck(cur) {
    if (cur.next !== null) {
        if (!recursivelyCheck(frontPointer.next)) {
            return false
        }
        if(cur.val !== frontPointer.next){
            return false
        }
        frontPointer = frontPointer.next;
    }
    
    return true
}

