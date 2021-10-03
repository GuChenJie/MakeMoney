/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 const mergeTwoLists = function mergeTwoLists(l1, l2) {
    if (!l1 && !l2) {
        return null;
    }

    let n = new ListNode();
    let head = n;
    do {
        if (!l1) {
            n.val = l2.val;
            n.next = l2.next;
            break;
        } else if (!l2) {
            n.val = l1.val;
            n.next = l1.next;
            break;
        } else {
            if (l1.val < l2.val) {
                n.val = l1.val;
                l1 = l1.next;
            } else {
                n.val = l2.val;
                l2 = l2.next;
            }
            n = n.next = new ListNode();
        }
    } while (l1 || l2);

    return head;
};