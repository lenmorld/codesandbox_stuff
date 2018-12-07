// render props component

import React from "react";

class TransformCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upper: "",
      lower: ""
    };

    this.transformCase = this.transformCase.bind(this);
  }

  transformCase(event) {
    this.setState({
      upper: event.target.value.toUpperCase(),
      lower: event.target.value.toLowerCase()
    });
  }

  render() {
    return (
      <div onChange={this.transformCase}>
        {/* HoC style */}
        {/* <Component {...this.props} hocOutput={this.state} /> */}

        {this.props.render(this.state)}
      </div>
    );
  }
}

export default TransformCase;
