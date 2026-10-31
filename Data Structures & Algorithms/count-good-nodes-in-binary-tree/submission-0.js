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
    goodNodes(root) {
        function dfs(node, maxSoFar){
            if(node === null){
                return 0
            }
            let count =0
            if (node.val >= maxSoFar){
                count++
            }

            const newMax = Math.max(maxSoFar, node.val)

            const left = dfs(node.left , newMax)
            const right = dfs(node.right, newMax)

            return count + left + right
        }
        return dfs(root,root.val)
    }
}
