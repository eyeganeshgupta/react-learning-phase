class Emoji extends React.Component {
  render() {
    let result =
      this.props.e1 === this.props.e2 && this.props.e2 === this.props.e3;

    /*let endResult = null;
  
      if (result) {
        endResult = "मैं खिलाड़ी तू अनाड़ी";
      } else {
        endResult = "ये दुख कहे खतम नहीं होता";
      }
      return (
          <div>
              <span>{this.props.e1}</span>
              <span>{this.props.e2}</span>
              <span>{this.props.e3}</span>
              <p>{endResult}</p>
              <hr/>
          </div>
      );
      */

    return (
      <div>
        <span>{this.props.e1}</span>
        <span>{this.props.e2}</span>
        <span>{this.props.e3}</span>
        <p>{result ? "मैं खिलाड़ी तू अनाड़ी" : "ये दुख कहे खतम नहीं होता"}</p>
        <hr />
      </div>
    );
  }
}
