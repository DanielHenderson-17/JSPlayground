//function to sort an array of numbers in ascending order
function sortArray(arr) {
  // Check if the input is an array
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  // Check if the array contains only numbers
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new Error("Array must contain only numbers");
    }
  }

  // Sort the array in ascending order
  return arr.sort((a, b) => a - b);
}
