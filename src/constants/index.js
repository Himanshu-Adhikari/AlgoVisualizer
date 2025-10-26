export const sort_algos_data = [
  {
    name: "merge-sort",
    displayName: "Merge Sort",
    description: "A divide-and-conquer algorithm that splits the array, sorts the halves, and merges them.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)"
    },
    spaceComplexity: "O(n)",
    code: `
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
`
  },
  {
    name: "quick-sort",
    displayName: "Quick Sort",
    description: "Uses partitioning around a pivot. Efficient but worst-case is poor if pivot chosen badly.",
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n^2)"
    },
    spaceComplexity: "O(log n)",
    code: `
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let left = [], right = [];
  for (let i = 0; i < arr.length - 1; i++)
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
`
  },
  {
    name: "bubble-sort",
    displayName: "Bubble Sort",
    description: "Repeatedly swaps adjacent elements if they are in the wrong order.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n^2)",
      worst: "O(n^2)"
    },
    spaceComplexity: "O(1)",
    code: `
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length - i - 1; j++)
      if (arr[j] > arr[j+1])
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
  return arr;
}
`
  },
  {
    name: "insertion-sort",
    displayName: "Insertion Sort",
    description: "Builds the sorted array one item at a time by inserting elements into their correct position.",
    timeComplexity: {
      best: "O(n)",
      average: "O(n^2)",
      worst: "O(n^2)"
    },
    spaceComplexity: "O(1)",
    code: `
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i], j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }
  return arr;
}
`
  },
  {
    name: "selection-sort",
    displayName: "Selection Sort",
    description: "Repeatedly selects the smallest element from the unsorted part and swaps it with the first element.",
    timeComplexity: {
      best: "O(n^2)",
      average: "O(n^2)",
      worst: "O(n^2)"
    },
    spaceComplexity: "O(1)",
    code: `
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i+1; j < arr.length; j++)
      if (arr[j] < arr[min]) min = j;
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
`
  }
];

const curr_algos=[
  ''
]