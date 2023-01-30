const updateArrElement = (arr, original, updated, value) => {
  let target = arr.find((element) => element[value] === original[value]);

  let idxOfTarget = arr.indexOf(target);

  if (target !== undefined) {
    arr[idxOfTarget] = updated;
    return true;
  }

  return false;
};

export default updateArrElement;
