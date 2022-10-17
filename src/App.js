import logo from "./logo.svg";
import "./App.css";
import Request from "./component/Request";
import Functionmap from "./array/map/Functionmap";
import { dig } from "./Object/nestedObject/Object";
import { nestedObject } from "./Object/nestedObject/modelObject";

function App() {
  console.log(dig(nestedObject, "level2"));
  return (
    <>
      {/* <Request /> */}
      <Functionmap />
    </>
  );
}

export default App;
