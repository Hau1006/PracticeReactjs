import "./App.css";
import Request from "./component/Request";
import Functionmap from "./array/map/Functionmap";
import { dig, findKey, haskey } from "./Object/nestedObject/Object";
import { ages, nestedObject, obj } from "./Object/nestedObject/modelObject";
import FunctionReduce from "./array/reduce/FunctionReduce";

function App() {
  return (
    <>
      {/* <Request /> */}
      {/* <Functionmap /> */}
      <FunctionReduce />
    </>
  );
}

export default App;
