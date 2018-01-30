import React from "react";

import Loading from '../GLoading';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      id: null,
      title: '',
      content: ''
    };
  }

  render() {
    return (
      <div style="padding: 0 32px">
        {this.state.status === 0 && <Loading />}
        <h1>{this.state.title}</h1>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default Detail;
