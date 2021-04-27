/**
 * 给你一个链表， 删除链表的倒数第 n 个结点， 并且返回链表的头结点。
 
 输入： head = [1, 2, 3, 4, 5], n = 2
 输出：[1, 2, 3, 5]

 示例 2：
 输入： head = [1], n = 1
 输出：[]

 示例 3：
 输入： head = [1, 2], n = 1
 输出：[1]

 作者： 力扣(LeetCode)
 链接： https: //leetcode-cn.com/leetbook/read/top-interview-questions-easy/xn2925/
     来源： 力扣（ LeetCode）
 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
     let pre = new ListNode(-1, head);
     var last = pre;
     var fast = pre;
     for (var i = 0; i < n; i++) {
         fast = fast.next;

     }
     while (fast.next) {
         fast = fast.next;
         last = last.next;
     }
     last.next = last.next.next;
     return pre.next;
};