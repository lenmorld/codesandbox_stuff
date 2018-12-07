// hoc

import React from "react";

const withUpperLowerCase = Component => {
  return class extends React.Component {
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
          <Component {...this.props} hocOutput={this.state} />
        </div>
      );
    }
  };
};

export default withUpperLowerCase;
