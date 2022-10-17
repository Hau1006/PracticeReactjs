// ! Object - Nested Object
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === "object") return dig(val, target);
      }, undefined);
// dig(nestedObject, "level3"); // 'some data"
// dig(nestedObject, "level4"); // undefined
// ! Object -  find key of object
const findKey = (obj, val) =>
  Object.keys(obj).filter((key) => obj[key] === val);
// ! Object -  check key of object
const haskey = (obj, keys) => {
  return (
    keys.length > 0 &&
    keys.every((key) => {
      if (typeof obj !== "object" || !obj.hasOwnProperty(key)) return false;
      obj = obj[key];
      return true;
    })
  );
};
// console.log(dig(nestedObject, "level2"));
// console.log(findKey(ages, 20));
// console.log(haskey(obj, ["c"]));

export { dig, findKey, haskey };
