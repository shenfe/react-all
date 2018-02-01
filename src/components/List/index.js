import React from 'react';

import { Link } from 'react-router-dom';

import Loading from '../GLoading';

import './index.css';

import { changeFilter } from '../../store/actions';

import { connect } from 'react-redux';

import axios from 'axios';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      status: 0,
      // filterText: ''
    };

    this.updateFilterText = this.updateFilterText.bind(this);
  }

  componentDidMount() {
    axios.get('/api/getList')
      .then(res => {
        this.setState({
          status: 1,
          list: res.data.data
        });
      })
      .catch(err => {
        console.error(err);
      });
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
        <Link to={'/list/' + item.id}>
          {item.id}: {item.title}
        </Link>
      </li>
    );
    return (
      <div>
        <input type="text" value={this.props.filterText} onChange={this.updateFilterText} />
        {this.state.status === 0
        ? (<Loading/>)
        : (<ul className="list">{list}</ul>)}
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
