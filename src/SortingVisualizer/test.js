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
let array = [5, 4, 3, 2, 1];

quickSort(array, 0, array.length - 1);
console.log(array);
