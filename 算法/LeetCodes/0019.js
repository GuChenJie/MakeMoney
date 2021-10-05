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
const removeNthFromEnd = function removeNthFromEnd(head, n) {
    let nil = head;
    let targetPrev;
    for (let i = 0; i < n; i++) {
        if (nil.next) {
            nil = nil.next;
        } else {
            if (n === i + 1) {
                head = head.next;
            }
            return head;
        }
    }


    targetPrev = head;

    while(nil.next) {
        targetPrev = targetPrev.next;
        nil = nil.next;
    }

    targetPrev.next = targetPrev.next.next || null;


    return head;

};