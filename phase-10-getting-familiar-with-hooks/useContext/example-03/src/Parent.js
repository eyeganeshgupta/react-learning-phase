import React, { useState } from "react";
import Child from "./Child";
export let EmpContext = React.createContext();

export default function Parent() {
  const [emp, setEmp] = useState({
    empId: 97,
    empName: "Ganesh Gupta",
    empSalary: 52000,
  });

  return (
    <React.Fragment>
      <h1>This is Parent Component</h1>
      <p>
        Employee Salary: <b>{emp.empSalary}</b>
      </p>
      <hr />
      <EmpContext.Provider value={{ empObj: emp, updateEmpObj: setEmp }}>
        <Child />
      </EmpContext.Provider>
    </React.Fragment>
  );
}
