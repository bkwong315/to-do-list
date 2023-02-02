const updateKeyValuePairs = (target, source) => {
  for (const key of Object.keys(source)) {
    if (target[key] !== undefined) {
      target[key] = source[key];
    }
  }
};

export default updateKeyValuePairs;
