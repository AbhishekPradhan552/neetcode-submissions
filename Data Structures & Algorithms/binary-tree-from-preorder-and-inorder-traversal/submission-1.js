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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inorderMap = new Map()

        for(let i = 0 ; i< inorder.length; i++){
            inorderMap.set(inorder[i], i) 
        }

        let preOrderIndex = 0
        function build(left, right){
            if(left> right){
                return null
            }

            //pick next root from preOrder
            const rootValue = preorder[preOrderIndex++]
            const root = new TreeNode(rootValue)

            //find root in inorder 
            const mid = inorderMap.get(rootValue)

            //build left and right subtree
            root.left = build(left ,mid-1)
            root.right = build(mid+1 , right)

            //return completed subtree
            return root

        }

        //start with entire inorder range
        return build(0, inorder.length-1)
    }
}
