// Using iteration, write a function fibs which takes a number and returns 
// an array containing that many numbers from the fibonacci sequence. Using 
// an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
let fibs=function(n){
    let array=[0,1];
    for(let i=0;i<=n-3;i++){        
        array.push(array[array.length-1]+array[array.length-2])
    }
    return array
}
console.log(fibs(0));

// Now write another function fibsRec which solves the same problem recursively. 
// This can be done in just a couple of lines (or 1 if you’re crazy, but don’t 
// consider either of these lengths a requirement… just get it done).

const fibRec = n => {
        if (n < 0) {
            return console.error("Number needs to be positive");          
        }      
        return n <= 1 ? n : fibRec(n - 1) + fibRec(n - 2);
      };

console.log(fibRec(8))