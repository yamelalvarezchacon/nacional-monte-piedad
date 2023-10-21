class MergeNumericArray {
    static merge(array1, array2) {
      const mergedArray = array1.concat(array2);
      const uniqueValues = new Set(mergedArray);
      const setToArray = Array.from(uniqueValues);
      const sortedArray = setToArray.sort((a, b) => a - b)
      return sortedArray;
    }
  }

const array1 = [-10, 22, 333, 42];
const array2 = [-11, 5, 22, 41, 42];

const mergedArray = MergeNumericArray.merge(array1, array2);

console.log("El arreglo mezclado y ordenado ascendentemente es: " + mergedArray);