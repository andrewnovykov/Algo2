// O(n) or linear

console.log('-- index.js --')

const nemo = ['nemo'];
const large = Array(100).fill('nemo')

function findNemo(array) {
    // let t0 = performance.now()
    for (let i = 0; i< array.length; i++) {
        if (array[i]  === 'nemo') {
            console.log('Found')
        }
    }
    // let t1 = performance.now()
}

findNemo(large);// O(n) or linear
// console.log('Call to find nemo took' + (t1-t0) + 'ms')