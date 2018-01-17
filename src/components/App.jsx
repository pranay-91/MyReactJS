/* @flow */
import React, { Component } from "react";
import shortid from "shortid";
import "../styles/app.scss";

type Props = {
  foo: number,
};

export default class App extends Component<Props> {
  appList: Array<string>;
  constructor() {
    super();
    this.appList = ["word", "cross", "jumble", "new"];
  }

  renderList() {
    return this.appList.map(app => <li key={shortid.generate()}>{app}</li>);
  }
  render() {
    return (
      <div>
        <h1>{this.props.foo}</h1>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}
