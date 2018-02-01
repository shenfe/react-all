import React  from 'react';

import './index.css';

import { withRouter } from 'react-router';

import { Link } from 'react-router-dom';

const classUnion = className => {
  if (typeof className === 'string') return className;
  let type = Object.prototype.toString.call(className).toLowerCase();
  type = type.substring(8, type.length - 1);
  if (type === 'array') return className.map(classUnion).join(' ');
  if (type === 'object')
    return Object.keys(className)
      .map(p => !!className[p] && p)
      .filter(v => !!v)
      .join(' ');
  return '';
};

function Header({ links, location }) {
  const navs = links;
  const list = navs.map(item =>
    <li key={item.alias} className={classUnion([{ active: location.pathname === item.alias }, 'cell'])}>
      <Link to={item.alias}>{item.text}</Link>
    </li>
  );
  return (
    <ul className="nav global-flex">
      {list}
    </ul>
  );
}

export default withRouter(Header);
