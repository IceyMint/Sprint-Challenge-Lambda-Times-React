import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
          console.log(props)}{
          props.tabs.map(data =>
            <Tab tab={data} tabclick={props.selectTabHandler} selectedTab={props.selectedTab} />
          )
        }
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propType = {
  tabs: PropTypes.arrayOf(PropTypes.object)
}

export default Tabs;
