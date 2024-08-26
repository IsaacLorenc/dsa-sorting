function bubbleSort(arr) {
    // This is a helper function that swaps two elements in an array
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        // This is a destructuring assignment. It's a shortcut for writing:
        // temp = arr[idx1];
        // arr[idx1] = arr[idx2];
        // arr[idx2] = temp;
    };

    // This is the outer loop of the bubble sort. It runs (arr.length - 1) times
    for (let i = arr.length; i > 0; i--) {
        // This is the inner loop. It runs (i - 1) times
        for (let j = 0; j < i - 1; j++) {
            // This is the comparison that decides whether to swap two elements
            // If the element at index j is greater than the element at index j + 1,
            // then swap them
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

module.exports = bubbleSort;