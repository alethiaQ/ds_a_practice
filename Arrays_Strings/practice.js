const a = [4, 0, 1, -2, 3]

function sumOfA(arr) {
    const b = [];
    for (let i = 0; i < arr.length; i++){
        let prev = 0;
        let next = 0;
        if (arr[i - 1]) prev = arr[i - 1];
        if (arr[i + 1]) next = arr[i + 1]; 
        b[i] = prev + arr[i] + next; 

    }
    console.log(b); 
}

sumOfA(a); 