/* @flow */
import React, { Component } from "react";
import shortid from "shortid";
import "../styles/app.scss";

type Props = {
  foo: number,
};

type State = {
  a: number,
};

export default class App extends Component<Props, State> {
  static defaultProps = {
    foo: 0,
  };
  state = {
    a: 0,
  };
  appList: Array<string> = ["cross", "jumble", "new"];

  renderList() {
    return this.appList.map(app => <li key={shortid.generate()}>{app}</li>);
  }
  render() {
    return (
      <div>
        <h1>State: {this.state.a}</h1>
        <h1>Props: {this.props.foo}</h1>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}
