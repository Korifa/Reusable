'use strict';

const range = (st, end) => {
  const res = [];
  if (end - st < 0) return res;
  for (let i = st; i <= end; i++) {
    res.push(i);
  }
  return res;
};

module.exports = { range };
