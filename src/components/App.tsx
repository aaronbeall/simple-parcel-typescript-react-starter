import React, { Component } from "react";
import { Alert } from "reactstrap";

export class App extends Component {
  render() {
    return (
      <section>
        <h1 className="display-3">Hello World!</h1>
        <Alert color="primary">
          See <a href="https://reactstrap.github.io/components/">Reactstrap components</a> for examples.
        </Alert>
        <Alert color="secondary">
          Recommended IDE: <a href="https://code.visualstudio.com/">Visual Studio Code</a>
        </Alert>
        <Alert>
          Use <code>npm start</code> to start local dev server with hot reload.
        </Alert>
        <Alert>
          User <code>npm run build</code> to create a production bundle.
        </Alert>
      </section>
    )
  }
}