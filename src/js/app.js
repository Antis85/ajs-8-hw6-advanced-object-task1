export default function orderByProps(obj, sortKeyArr = []) {
  const sortKeyArrResult = [];
  const sortRestArrResult = [];
  const targetObj = { ...obj };
  const privateObj = {};

  //  eslint-disable-next-line guard-for-in
  for (const key in targetObj) {
    const find = sortKeyArr.find((item) => item === key);
    const index = sortKeyArr.indexOf(find);

    if (find) {
      privateObj.key = key;
      privateObj.value = targetObj[key];
      sortKeyArrResult[index] = { ...privateObj };
    } else {
      privateObj.key = key;
      privateObj.value = targetObj[key];
      sortRestArrResult.push({ ...privateObj });
    }

    sortRestArrResult.sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      }
      return -1;
    });
  }
  return [...sortKeyArrResult, ...sortRestArrResult];
}
