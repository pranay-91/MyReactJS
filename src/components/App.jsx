import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.appList = ["word", "cross", "jumble", "new"]
    }

    renderList() {
        return this.appList.map((app,i)=><li key={i}>{app}</li>)
    }
    render() {
        return <ul>{this.renderList()}</ul>;
    }
}