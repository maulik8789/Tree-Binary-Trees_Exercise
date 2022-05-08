/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  findMinDepthDFS(){
    let toVisitStack = [this];
    let minDLeft = 1;
    let minDRight = 1;
    let total = Infinity;
    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if(!current.left){
        for (let child of current.left){ 
          minDLeft += 1;
          toVisitStack.push(child)
        }
      }
      
      if(!current.right){
        for (let child of current.right){ 
          minDRight += 1;
          toVisitStack.push(child)
        }
      }

      else if(minDRight+minDLeft<total){
        total = minDRight+minDLeft;
        minDLeft = 1;
        minDRight = 1;

      }
    }
    return total;
  }

  findNextLargerBFS(num){
    
  }
  

  

}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(val) {
    if(!this.root) return 0;
    return this.root.findMinDepthDFS(val)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(val) {
    if(!this.root) return 0;
    return this.root.findMaxDepthDFS(val)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null;
    let allnum = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      allnum.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root)

      while(allnum.length>0){
        let ans = Math.min(...allnum);
        if(ans > lowerBound){
          return ans
        }
        else{
          allnum.splice(allnum.indexOf(ans),1);
        }
      }
      return null;
    
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

//   areCousins(node1, node2) {

//   }

//   /** Further study!
//    * serialize(tree): serialize the BinaryTree object tree into a string. */

//   static serialize() {

//   }

//   /** Further study!
//    * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

//   static deserialize() {

//   }

//   /** Further study!
//    * lowestCommonAncestor(node1, node2): find the lowest common ancestor
//    * of two nodes in a binary tree. */

//   lowestCommonAncestor(node1, node2) {
    
//   }
}

module.exports = { BinaryTree, BinaryTreeNode };
