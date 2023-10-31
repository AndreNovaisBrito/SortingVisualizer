export function generateInsertionSortAnimations(array) {
  const animations = [];

  for (let i = 1; i < array.length; i++) {
    let a = i;
    while (a >= 1 && array[a] < array[a - 1]) {
      // Swap the elements
      animations.push([a, a - 1]);
      animations.push([a, a - 1]);

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
