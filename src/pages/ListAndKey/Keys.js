import React, { Component } from 'react';

class Keys extends Component {

  constructor(props) {
    super(props);
    // this.renderList = this.renderList.bind(this);
  }

  renderList(list) {
    const li = list.map((item, index) => {
      console.log("item:", item);
      // return <li key={index}>{item}</li>
      return <li>{item}</li>
    });
    return(
      <ul>
        {li}
      </ul>
    );
  }

  render() {
    const { list } = this.props;
    return(
      <div>
        {/* {this.renderList()} */}
        {this.renderList(list)}
      </div>
    );
  }
}

export default Keys;