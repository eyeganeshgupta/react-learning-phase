import React, { useContext } from "react";
import { EmpContext } from "./Parent";

export default function SubChild() {
  let context = useContext(EmpContext);
  return (
    <React.Fragment>
      <h1>This is SubChild Component</h1>
      <p>
        Employee id: <b>{context.empObj.empId}</b>
      </p>
      <p>
        Employee name: <b>{context.empObj.empName}</b>
      </p>
      <p>
        Employee salary: <b>{context.empObj.empSalary}</b>
      </p>
      <button
        style={{
          border: "none",
          borderRadius: "5px",
          padding: "5px 14px",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={() => {
          context.updateEmpObj({
            ...context.empObj,
            empSalary:
              context.empObj.empSalary + context.empObj.empSalary * 0.1,
          });
        }}
      >
        Increment Salary
      </button>
    </React.Fragment>
  );
}
