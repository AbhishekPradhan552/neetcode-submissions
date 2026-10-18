/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0
        function height(node){
            if(node === null) return null

            const leftHeight = height(node.left)
            const rightHeight = height(node.right)

            diameter = Math.max(diameter, leftHeight+rightHeight)

            return 1+ Math.max(leftHeight, rightHeight)

        }
        height(root)
        return diameter
    }
}
