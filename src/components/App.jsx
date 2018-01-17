import React from 'react';
import shortid from 'shortid';
import '../styles/app.scss';

export default class App extends React.Component {
  constructor() {
    super();
    this.appList = ['word', 'cross', 'jumble', 'new'];
  }

  renderList() {
    return this.appList.map(app => <li key={shortid.generate()}>{app}</li>);
  }
  render() {
    return <ul>{this.renderList()}</ul>;
  }
}
