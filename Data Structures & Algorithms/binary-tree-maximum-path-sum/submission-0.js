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
    maxPathSum(root) {
        let maxSum = -Infinity

        function dfs(node){
            if(node === null) return 0
            const leftGain = Math.max(0,dfs(node.left))
            const rightGain = Math.max(0,dfs(node.right))

            const currentPathSum = node.val + leftGain + rightGain

            //update globalmax
            maxSum = Math.max(maxSum, currentPathSum) 

            //return only one branch to parents
            return node.val + Math.max(leftGain, rightGain)

        }
        dfs(root)

        return maxSum

    }
}
