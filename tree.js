/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  findBFS() {
    let toVisitQueue = [this];
    let total = 0;
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
     
      total += current.val;
      for (let child of current.children) 
        toVisitQueue.push(child)
    }
    return total;
  }

  findEvenBFS(){
    let toVisitQueue = [this];
    let total = 0;
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
     if(current.val % 2 == 0){
      total += 1;
     }
      for (let child of current.children) 
        toVisitQueue.push(child)
    }
    return total;
  }

  findGreaterBFS(num){
    let toVisitQueue = [this];
    let total = 0;
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
     if(current.val > num){
      total += 1;
     }
      for (let child of current.children) 
        toVisitQueue.push(child)
    }
    return total;
  }


}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(val) {
    if(!this.root) return 0;
    return this.root.findBFS(val)
  }
  

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(val) {
    if(!this.root) return 0;
    return this.root.findEvenBFS(val)
  }

  // /** numGreater(lowerBound): return a count of the number of nodes
  //  * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0;
    return this.root.findGreaterBFS(lowerBound)
  }
}




module.exports = { Tree, TreeNode };
