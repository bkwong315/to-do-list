const removeFromArr = (arr, item) => {
  let idxOfItem = arr.indexOf(item);

  if (idxOfItem !== -1) {
    arr.splice(idxOfItem, 1);
    return true;
  }

  return false;
};

export default removeFromArr;
