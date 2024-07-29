import nx from '@jswork/next';

nx.defaultsValidate = function (inTarget, inValidates) {
  nx.forIn(inValidates, (path, validate) => {
    const val = nx.get(inTarget, path);
    const res = validate(val);
    if (res !== null) {
      nx.set(inTarget, path, res);
    }
  });
  return inTarget;
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.defaultsValidate;
}

export default nx.defaultsValidate;
