/*---------------- INSERTION SORT -----------------------*/

export function generateInsertionSortAnimations(array) {
  const animations = [];

  for (let i = 1; i < array.length; i++) {
    let a = i;
    while (a >= 1 && array[a] < array[a - 1]) {
      // Swap the elements
      let temp = array[a];
      array[a] = array[a - 1];
      array[a - 1] = temp;
      // Store the animations (indexes to swap)
      animations.push([a, a - 1]);
      a--;
    }
  }
  return animations;
}

/*---------------- BUBBLE SORT -----------------------*/

export function generateBubbleSortAnimations(array) {
  const animations = [];
  let swaped = true;
  while (swaped) {
    swaped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        animations.push([i, i + 1]);
        swaped = true;
      }
    }
  }
  return animations;
}

/*---------------- QUICK SORT -----------------------*/

export function quickSort(array, lo, hi, animations) {
  if (lo < hi) {
    const p = partition(array, lo, hi, animations);
    quickSort(array, lo, p - 1, animations);
    quickSort(array, p + 1, hi, animations);
  }
}

function partition(array, lo, hi, animations) {
  const pivot = array[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (array[j] <= pivot) {
      // Swap array[i] and array[j]
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      animations.push([i, j]);

      i++;
    }
  }

  // Swap array[i] and array[hi] to place the pivot in the correct position
  const temp = array[i];
  array[i] = array[hi];
  array[hi] = temp;
  animations.push([i, hi]);

  return i;
}

export function generateQuickSortAnimations(array) {
  const animations = [];
  quickSort(array, 0, array.length - 1, animations);
  return animations;
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
export function mergeSort(array, animations) {
  const length = array.length;
  if (length <= 1) {
    return array;
  }

  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  const sortedLeft = mergeSort(left, animations);
  const sortedRight = mergeSort(right, animations);

  console.log(animations);
  return merge(sortedLeft, sortedRight, animations);
}

export function generateMergeSortAnimations(array) {
  const animations = [];
  mergeSort(array, animations);
  return animations;
}
