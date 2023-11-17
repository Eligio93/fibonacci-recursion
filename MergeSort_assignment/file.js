// Build a function mergeSort that takes in an array and returns a sorted 
// array, using a recursive merge sort methodology.

// Tips:
// Think about what the base case is and what behavior is happening again 
// and again and can actually be delegated to someone else (e.g. that same function!).
// It may be helpful to check out the background videos again if you don’t 
// quite understand what should be going on.

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    for(;leftIndex<left.length;leftIndex++){
      result.push(left[leftIndex]);
    }
    for(;rightIndex<right.length;rightIndex++){
      result.push(right[rightIndex])
    }  
 
  return result
  }

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }else{   
        const middle = Math.round(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
        return merge(mergeSort(left), mergeSort(right));
    }
  }

console.log(mergeSort([1,7,5,2,4]));
