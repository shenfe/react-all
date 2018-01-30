import React  from 'react';

import './index.css';

import { Link } from 'react-router-dom';

function Header(props) {
  const navs = props.links;
  const list = navs.map(item =>
    <li key={item.alias} className="[{ active: current === item.alias }, 'cell']">
      <Link to={'/' + item.alias}>{item.text}</Link>
    </li>
  );
  return (
    <ul className="nav global-flex">
      {list}
    </ul>
  );
}

export default Header;
