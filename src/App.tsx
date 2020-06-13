import React from "react";
import { Component } from "react";

export default class AppContainer extends Component {
  constructor(pro: any) {
    super(pro);
    this.state = {
      list: [],
    };
  }

  componentWillMount() {
    this.getSelectList();
  }

  private getSelectList() {
    fetch("http://localhost:3000/api/select/list")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const list = myJson.data;
        console.log(list);
      });
  }

  render() {
    return <div>你好</div>;
  }
}
