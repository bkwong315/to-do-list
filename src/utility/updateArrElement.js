import updateKeyValuePairs from './updateKeyValuePairs';

const updateArrElement = (arr, original, updated, identifier) => {
  let target = arr.find(
    (element) => element[identifier] === original[identifier]
  );

  if (target !== undefined) {
    updateKeyValuePairs(target, updated);
    return true;
  }

  return false;
};

export default updateArrElement;
