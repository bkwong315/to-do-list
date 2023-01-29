const updateKeyValuePairs = (target, source) => {
  let res = structuredClone(target);

  for (const key of Object.keys(source)) {
    if (target[key] !== undefined) {
      res[key] = source[key];
    }
  }

  return res;
};

export default updateKeyValuePairs;
