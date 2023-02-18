class Course extends React.Component {
  render() {
    let { name, titles } = this.props;

    /*
      for (let title of titles) {
        subjects.push(<li>{title}</li>);
      }
      */

    /*
      titles.forEach((title) => {
        subjects.push(<li>{title}</li>);
      });
      */

    return (
      <div>
        <h3>Couse name: {name}</h3>
        <p>
          Titles:
          <ul>
            {titles.map((title) => {
              return <li>{title}</li>;
            })}
          </ul>
        </p>
      </div>
    );
  }
}
