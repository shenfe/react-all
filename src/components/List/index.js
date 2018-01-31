import React from 'react';

import { Link } from 'react-router-dom';

import Loading from '../GLoading';

import './index.css';

import { changeFilter } from '../../store/actions';

import { connect } from 'react-redux';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          title: 'Day 1'
        },
        {
          id: 2,
          title: 'Day 2'
        },
        {
          id: 3,
          title: 'Day 3'
        }
      ],
      status: 0,
      // filterText: ''
    };

    this.updateFilterText = this.updateFilterText.bind(this);
  }

  updateFilterText(event) {
    // this.setState({ filterText: event.target.value });
    this.props.dispatch(changeFilter(event.target.value));
  }

  render() {
    const listFilterText = this.props.filterText;
    const list = this.state.list.filter(item => String(item.id).includes(listFilterText) || item.title.includes(listFilterText))
      .map(item =>
      <li key={item.id}>
        <Link to={{ name: 'detail', params: { id: item.id } }}>
          {item.id}: {item.title}
        </Link>
      </li>
    );
    return (
      <div>
        <input type="text" value={this.props.filterText} onChange={this.updateFilterText} />
        {this.state.status === 0
        ? (<Loading v-if="status == 0" />)
        : (<ul v-else className="list">{list}</ul>)}
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    filterText: state.listFilterText
  }
}

export default connect(select)(List);
