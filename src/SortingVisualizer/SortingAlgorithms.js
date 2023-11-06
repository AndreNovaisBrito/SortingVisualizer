export function generateInsertionSortAnimations(array) {
  const animations = [];

  for (let i = 1; i < array.length; i++) {
    let a = i;
    while (a >= 1 && array[a] < array[a - 1]) {
      // Swap the elements
      let temp = array[a];
      array[a] = array[a - 1];
      array[a - 1] = temp;
      animations.push([a, a - 1]);
      // Store the animations (indexes to swap)
      a--;
    }
  }
  return animations;
}

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

// function generateQuickSortAnimations(array) {
//   let pivot = Math.floor(array.length / 2);
//   quickSortHelper(0, pivot - 1, array);
//   quickSortHelper(pivot + 1, array.length, array);
// }
// function quickSortHelper(index1, index2, array) {
//   quickSort();
// }
