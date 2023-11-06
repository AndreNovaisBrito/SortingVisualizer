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
