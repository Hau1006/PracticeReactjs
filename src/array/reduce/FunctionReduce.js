import React from "react";

const FunctionReduce = () => {
  const Accumulation = (array) => {
    if (!array || array.length === 0) return;
    return array.reduce((t, v) => {
      const result = t + v;
      return result;
    }, 0);
  };
  const mapReduce = (array) => {
    if (!array || array.length === 0) return;
    return array.reduce((t, v) => [...t, v * 2], []);
  };
  //   console.log(mapReduce([1, 2, 3, 4]));
  const filterReduce = (array) => {
    if (!array || array.length === 0) return;
    return array.reduce((t, v) => (v > 2 ? [...t, v + 3] : t), []);
  };
  //   console.log(filterReduce([1, 2, 3, 1, 1, 1]));
  const filmapReducer = (array) => {
    if (!array || array.length === 0) return;
    return array.reduce((t, v) => (v > 2 ? [...t, v * 2] : t), []);
  };
  const someReduce = (array) => {
    if (!array || array.length === 0) return;
    return array.reduce((t, v) => t || v > 5, false);
  };
  const everyreduce = (array) => {
    if (!array || array.length === 0) return;
    return array.reduce((t, v) => t && v > 5, true);
  };
  const data = [
    // { id: 1, name: "foo", gender: "nam" },
    // { id: 2, name: "bar", gender: "nu" },
    // { id: 3, name: "foo", gender: "be" },
    // { id: 4, name: "bar", gender: "nam" },
  ];
  const tranformerdata = (array) => {
    if (!array || array.length === 0) return;
    return array.reduce((res, cur) => {
      if (cur?.gender !== "nam") return res;
      return [...res, { human: `${cur.name}${cur.id}`, gender: cur.gender }];
    }, []);
  };

  console.log(tranformerdata(data), "ok");
  return <div>{mapReduce([1, 2, 3, 4])}</div>;
};

export default FunctionReduce;
