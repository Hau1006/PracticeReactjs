import React from "react";

const sampleComponent = () => {
  return isTrue ? <p>True!</p> : null;
};
const sampleComponent1 = () => {
  return isTrue && <p>True!</p>;
};
// Y soo many ternary??? :-/
const sampleComponent2 = () => {
  return (
    <div>
      {flag && flag2 && !flag3 ? (
        flag4 ? (
          <p>Blah</p>
        ) : flag5 ? (
          <p>Meh</p>
        ) : (
          <p>Herp</p>
        )
      ) : (
        <p>Derp</p>
      )}
    </div>
  );
};
const sampleComponent3 = () => {
  const basicCondition = flag && flag2 && !flag3;
  if (!basicCondition) return <p>Derp</p>;
  if (flag4) return <p>Blah</p>;
  if (flag5) return <p>Meh</p>;
  return <p>Herp</p>;
};

const Condition = () => {
  return <div>Condition</div>;
};

export default Condition;
