import React from "react";
import { Component } from "react";

export default class AppContainer extends Component<any, any> {
  // private prevY = 0;
  constructor(pro: any) {
    super(pro);
    this.state = {
      list: [],
    };
  }

  componentWillMount() {
    console.log('this.', this)
    this.getSelectList();
  }

  // private scrollAndLoading() {
  //   if (window.scrollY > this.prevY) {
  //     this.prevY = window.scrollY;
  //     // console.log(poll);
  //   }
  // }

  private getSelectList() {
    fetch("http://localhost:3000/api/select/list")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const list = myJson.data;
        this.setStat
        this.setState({
          list: list.slice(0, 100),
        });
        console.log(list);
      });
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        {list.map((item) => (
          <div>
            <span>{item.name}: </span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    );
  }
}
