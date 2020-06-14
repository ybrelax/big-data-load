import React, { Component } from "react";

export default class AppContainer extends Component<any, any> {
  private prevY = 0;
  private poll = null;
  constructor(pro: any) {
    super(pro);
    this.state = {
      list: [],
      poll: null
    };
  }

  componentWillMount() {
    this.getSelectList();
    window.addEventListener('scroll', () => this.scrollAndLoading(), false)
  }

  private scrollAndLoading() {
   // console.log(window.scrollY);
    if (window.scrollY > this.prevY) {
      this.prevY = window.scrollY;
      if (this.poll.getBoundingClientRect().top <= window.innerHeight) {

      }
      console.log('xxx:', this.poll.getBoundingClientRect().top);
    }
  }

  private getSelectList() {
    fetch("http://localhost:3000/api/select/list")
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        const list = myJson.data;
        this.setState({
          list: list.slice(0, 100),
        });
        console.log(list);
      });
  }

  render() {
    const { list } = this.state;
    console.log('更新了')
    return (
      <div>
        <div>
          {list.map((item) => (
            <div key={item.name}>
              <span>{item.name}: </span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div ref = {e => this.poll = e}></div>
      </div>
    );
  }
}
