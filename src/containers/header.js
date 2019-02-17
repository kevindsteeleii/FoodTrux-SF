import React from 'react';

import '../stylesheets/Components.scss';
// container for title, filter dash and its subsequent menus/tabs
const Header = (props) => {
  const { children } = props;
  return(<div id="header">
    { children }
  </div>)
}

export default Header;