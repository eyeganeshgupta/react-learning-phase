class Wish extends React.Component {
  static defaultProps = {
    name: "Everyone",
    from: "Team~RG",
  };

  render() {
    return (
      <h1>
        Good Morning {this.props.name} from {this.props.from}
      </h1>
    );
  }
}

/*
  class ClassName extends React.Component {
    static defaultProps = {
      property: value,
    };
  
    render() {
      return jsx;
    }
  }
  */

/*class Wish extends React.Component {
    render() {
      return (
        <h1>
          Good Morning {String(this.props.name)} from {String(this.props.from)}
        </h1>
      );
    }
  }
  */
