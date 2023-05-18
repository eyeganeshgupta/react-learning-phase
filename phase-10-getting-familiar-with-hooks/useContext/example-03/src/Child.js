import React, { useContext } from "react";
import { EmpContext } from "./Parent";
import SubChild from "./SubChild";

export default function Child() {
  let context = useContext(EmpContext);
  return (
    <React.Fragment>
      <h1>This is Child Component</h1>
      <p>
        Employee id: <b>{context.empObj.empId}</b>
      </p>
      <p>
        Employee name: <b>{context.empObj.empName}</b>
      </p>
      <p>
        Employee salary: <b>{context.empObj.empSalary}</b>
      </p>
      <hr />
      <SubChild />
    </React.Fragment>
  );
}
