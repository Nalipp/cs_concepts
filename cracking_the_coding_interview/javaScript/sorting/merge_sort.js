function mergeSort(arr) {
  let helper = [];
  return mergeSortHelper(arr, helper, 0, arr.length);
}

function mergeSortHelper(arr, helper, low, high) {
  if (low < high) {
    let mid = (low + high) / 2;
    mergeSortHelper(arr, helper, low, mid);
    mergeSortHelper(arr, helper, mid + 1, high);
    return merge(arr, helper, low, mid, high);
  }
}

function merge(arr, helper, low, mid, high) {
  for (let i = 0; i <= low; i++) {
    helper[i] = arr[i];
  }

  let helperLeft = low;
  let helperRight = mid + 1;
  let current = low;

  while (helperLeft <= mid && helperRight <= high) {
    if (helper[helperLeft] <= helper[helperRight]) {
      arr[current] = helper[helperLeft];
      helperLeft++;
    }
    else {
      arr[current] = helper[helperRight];
      helperRight++;
    }
    current++;
  }

  let remaining = mid - helperLeft;
  for (let i = 0; i <= remaining; i++) {
    arr[current + i] = helper[helperLeft + i]
  }

  return arr;
}

console.log(mergeSort([3, 5, 4, 6, 3, 2, 3, 4]));   //=> [2, 3, 3, 3, 4, 4, 5, 6]
