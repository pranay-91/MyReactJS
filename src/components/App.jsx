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
  appList: Array<string>;
  constructor() {
    super();
    this.appList = ["word", "cross", "jumble", "new"];
    this.state = {
      a: 0,
    };
  }

  renderList() {
    return this.appList.map(app => <li key={shortid.generate()}>{app}</li>);
  }
  render() {
    return (
      <div>
        <h1>{this.state.a}</h1>
        <h1>{this.props.foo}</h1>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}
