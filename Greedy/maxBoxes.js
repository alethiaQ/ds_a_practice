// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

// Return the maximum total number of units that can be put on the truck.

const boxTypes = [[5, 10], [2, 5], [4, 7], [3, 9]], truckSize = 10; //91

const maxBoxes = (boxTypes, truckSize) => {
    let count = 0; 
    const boxesSorted = boxTypes.sort((a, b) => b[1] - a[1]);
    // console.log(boxesSorted);  
    for (let i = 0; i < boxTypes.length; i++) {
        if (truckSize <= 0) {
            console.log(count);
            return count;
        }
        if (truckSize > boxesSorted[i][0]) {
            count += boxesSorted[i][0] * boxesSorted[i][1];
            truckSize -= boxesSorted[i][0];
        // }
        } else {
            count += truckSize * boxesSorted[i][1];
            truckSize -= boxesSorted[i][1];
        }
        return count;
        // console.log(count);
    }
    
}

maxBoxes(boxTypes, truckSize);