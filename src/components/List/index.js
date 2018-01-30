import React from 'react';

import { Link } from 'react-router-dom';

import Loading from '../GLoading';

import './index.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      status: 0,
      filterText: ''
    };

    this.updateFilterText = this.updateFilterText.bind(this);
  }

  updateFilterText(event) {
    this.setState({filterText: event.target.value});
  }

  render() {
    const list = this.state.list.map(item =>
      <li key={item.id}>
        <Link to={{ name: 'detail', params: { id: item.id } }}>
          {item.id}: {item.title}
        </Link>
      </li>
    );
    return (
      <div>
        <input type="text" value={this.state.filterText} onChange={this.updateFilterText} />
        {this.state.status === 0 
        ? (<Loading v-if="status == 0" />)
        : (<ul v-else className="list">{list}</ul>)}
      </div>
    );
  }
}

export default List;

