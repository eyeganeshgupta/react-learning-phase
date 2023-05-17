import React, { useContext } from "react";
import { EmpContext } from "./Parent";

export default function SubChild() {
  let emp = useContext(EmpContext);
  return (
    <React.Fragment>
      <h3>This is SubChild Component</h3>
      <p>
        Employee id: <b>{emp.empId}</b>
      </p>
      <p>
        Employee name: <b>{emp.empName}</b>
      </p>
      <p>
        Employee salary: <b>{emp.empSalary}</b>
      </p>
    </React.Fragment>
  );
}
