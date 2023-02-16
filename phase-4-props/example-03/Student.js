class Student extends React.Component {
  render() {
    let { street, city } = this.props.address;
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>Subjects: {this.props.subjects.join(", ")}</p>
        <p>Marks: {this.props.marks.join(", ")}</p>
        <p>Result: {String(this.props.isPass)}</p>
        <p>
          Address: {street}, {city}
        </p>
      </div>
    );
  }
}
