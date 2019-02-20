import React from 'react';

import '../stylesheets/Filter.scss';

class FilterDropDown extends React.Component{

  componentDidUpdate() {
    this.checkToggle(this.props);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { toggle } = this.props;
    const prevToggle = prevProps.toggle;
    if (toggle !== prevToggle) {
      this.checkToggle(this.props);
    }
    return null;
  }

  checkToggle = ({toggle}) => {
    const filterDropdown = document.getElementById('filter-dropdown');
    if (!!filterDropdown) {
      if (toggle) {
        filterDropdown.classList.remove('hidden');
        filterDropdown.classList.add('visible');
      } else {
        filterDropdown.classList.remove('visible');
        filterDropdown.classList.add('hidden');
      }
    }
  }

  render() {
    const { toggle, children } = this.props;
    return(<>
      <div id="filter-dropdown">
        {toggle && children }
      </div>
    </>);
  }
}

export default FilterDropDown;