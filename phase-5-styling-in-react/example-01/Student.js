class Student extends React.Component {
  render() {
    let { name, rollNo, subjects, marks } = this.props;
    let total = 0;
    return (
      <div className="Student">
        <h1>Student Details</h1>
        <p>
          Name: <span>{name}</span>
        </p>
        <p>
          RollNo: <span>{rollNo}</span>
        </p>
        <p>
          Subjects:
          <ul>
            {subjects.map((subject) => (
              <li>{subject}</li>
            ))}
          </ul>
        </p>
        <p>
          Marks:
          <ul>
            {marks.map((mark) => {
              total = total + mark;
              return <li>{mark}</li>;
            })}
          </ul>
        </p>
        <p>
          Total Marks Obtained: <span>{total}</span>
        </p>
        <p>
          Result: <span>{total >= 100 ? "Pass" : "Fail"}</span>
        </p>
      </div>
    );
  }
}
