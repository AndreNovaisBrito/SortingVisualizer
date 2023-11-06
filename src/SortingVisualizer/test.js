function quickSort(array, lo, hi) {
  if (lo >= hi || lo < 0) {
    return;
  }
  console.log(array);
  let p = partition(array, lo, hi);

  quickSort(array, lo, p - 1);
  quickSort(array, p + 1, hi);
}
function partition(array, lo, hi) {
  let pivot = array[hi];

  let i = lo - 1;

  for (let j = lo; j < hi; j++) {
    if (array[j] <= pivot) {
      i++;
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  i++;
  let temp = array[i];
  array[i] = array[hi];
  array[hi] = temp;
  return i;
}

/*---------------- MERGE SORT -----------------------*/
// Function to merge two subarrays
function merge(array, left, right, animations) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    // Compare the elements and push their indices for animation
    animations.push([leftIndex, rightIndex]);
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements, if any
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Merge sort function
function mergeSort(array, animations) {
  const length = array.length;
  if (length <= 1) {
    return array;
  }

  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  const sortedLeft = mergeSort(left, animations);
  const sortedRight = mergeSort(right, animations);

  return merge(sortedLeft, sortedRight, animations);
}

function generateMergeSortAnimations(array) {
  const animations = [];
  mergeSort(array, animations);
  return animations;
}

let array = [5, 4, 3, 2, 1];
let animations = generateMergeSortAnimations(array);
mergeSort(array, animations);
console.log(array);
