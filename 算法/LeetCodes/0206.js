/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 遍历
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let prev = null;
    let target = head;
    let next;
    while(target) {
        next = target.next;
        target.next = prev;
        prev = target;
        target = next;
    }
    return prev;
};
// /**
//  * 递归
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
//  var reverseList = function(head) {
//     const rev = function(next, curr) {
//         if(next === null) return curr;
//         let node = rev(next.next, next);
//         next.next = curr;
//         return node;
//     }

//     return rev(head, null);
// };