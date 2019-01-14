//Dataset to work with;
const dataset = [[1,3,5,7,9],[11,13,15,17,19],[21,23,25,27,29],[31,33,35,37,39],[41,43,45,47,49],[51,53,55,57,59]];
console.table(dataset,);

//Contains function, with two inputs as required. This solution provides a O(n*log(m))  given that the dataset is n*m
function contains (data,input) {
  var rtrn = false;
  var i = 0;
  while((i < dataset.length) && !rtrn){
    rtrn = binarySearch(dataset[i],input);
    i++;
  }
  return rtrn;
}

function binarySearch (data, input) {
  // initial values for start, middle and end
  let start = 0
  let stop = data.length - 1
  let middle = Math.floor((start + stop) / 2)

  // While the middle is not what we're looking for and the list does not have a single item
  while (data[middle] !== input && start < stop) {
    if (input < data[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }

    // recalculate middle on every iteration
    middle = Math.floor((start + stop) / 2)
  }
  // if the current middle item is what we're looking for return it's index, else return -1
  return (data[middle] !== input) ? false : true
}
