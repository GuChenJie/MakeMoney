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
 const addTwoNumbers = function addTwoNumbers(l1, l2) {
    const head = new ListNode();
    let curNode = head;
    let c = 0;
    do {
      if (l1) {
        curNode.val += l1.val;
        l1 = l1.next;
      }
      if (l2) {
        curNode.val += l2.val;
        l2 = l2.next;
      }
      if (curNode.val >= 10) {
        c = 1;
        curNode.val -= 10;
      } else {
        c = 0;
      }
      curNode.next = (l1 || l2 || c > 0) ? new ListNode(c) : null;
      curNode = curNode.next;
    } while (curNode);
    return head;
  };