//BIG O

const boxes = [1,2,3,4,5];

function LogArr(arr) {

    for (let i = 0; i < arr.length; i++) {

        for(let j = 0; j < arr.length; j++) {
           console.log(i, j) 
        }
        
    }

}

LogArr(boxes);

//O( n * n ) --> O(n^2);