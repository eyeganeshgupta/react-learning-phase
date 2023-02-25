class Student extends React.Component {
    render() {
      let { name, rollNo, subjects, marks } = this.props;
      let total = 0;
      return (
        <div
          style={{
            border: "1px solid whitesmoke",
            borderRadius: "15px",
            paddingLeft: "15px",
          }}
        >
          <h1
            style={{
              fontFamily: "Lobster, sans-serif",
              color: "orange",
            }}
          >
            Student Details
          </h1>
          <p>
            Name: <span style={{ color: "gray" }}>{name}</span>
          </p>
          <p>
            RollNo: <span style={{ color: "gray" }}>{rollNo}</span>
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
  