import React, { useState } from "react";
import Child from "./Child";
export let EmpContext = React.createContext();

export default function Parent() {
  const [empObj, setEmpObj] = useState({
    empId: 11,
    empName: "Ganesh Gupta",
    empSalary: 52000,
  });

  return (
    <React.Fragment>
      <h1>This is Parent Component</h1>
      <hr />
      <EmpContext.Provider value={empObj}>
        <Child />
      </EmpContext.Provider>
    </React.Fragment>
  );
}
