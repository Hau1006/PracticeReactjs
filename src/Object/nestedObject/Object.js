const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === "object") return dig(val, target);
      }, undefined);
// dig(nestedObject, "level3"); // 'some data"
// dig(nestedObject, "level4"); // undefined
export { dig };
