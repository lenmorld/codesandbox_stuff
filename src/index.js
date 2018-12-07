import React from "react";
import ReactDOM from "react-dom";
import withUpperLowerCase from "./hoc";
import TransformCase from "./render_props";

// ===== HoC solution ==========

class Stuff extends React.Component {
  render() {
    const { upper, lower } = this.props.hocOutput;

    return (
      <div>
        <input placeholder="type here" />
        <div>
          <p> upper: {upper} </p>
          <p> lower: {lower} </p>
        </div>
      </div>
    );
  }
}

const StuffWithUpperLower = withUpperLowerCase(Stuff);
// ===== end of HoC solution ==========

// ===== render prop solution ====
class Stuff2 extends React.Component {
  render() {
    return (
      <div>
        {/* enclose app with the reusable component and 
            - supply a render prop
            - render props is a function that receives
            - the results: upper, lower arguments,  
            - and uses them in the render() below */}
        <TransformCase
          render={({ upper, lower }) => (
            <div>
              <input placeholder="type here" />
              <div>
                <p> upper: {upper} </p>
                <p> lower: {lower} </p>
              </div>
            </div>
          )}
        />

        {/* ... maybe you have other stuff here,
            not related to the render props */}
      </div>
    );
  }
}

// ===== end of render prop solution ====

class App extends React.Component {
  render() {
    //return <Stuff />;
    return (
      <div>
        <h2>HoC</h2>
        <StuffWithUpperLower />
        <hr />

        <h2>Render Props</h2>
        <Stuff2 />
        <hr />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
