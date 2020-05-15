function print(items ) {



    console.log(items[0]); //O(1)

    let mid = Math.floor(items.length / 2); //O(1)
    var index = 0; //O(1)

    while (index < mid) { //O(n/2)
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi') //O(100)
    }

}

//O(n)