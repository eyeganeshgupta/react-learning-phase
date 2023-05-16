import React from "react";
import { EmpContext } from "./Parent";

export default function SubChild() {
  return (
    <React.Fragment>
      <h3>This is SubChild Component</h3>
      <EmpContext.Consumer>
        {(emp) => {
          return (
            <React.Fragment>
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
        }}
      </EmpContext.Consumer>
    </React.Fragment>
  );
}
