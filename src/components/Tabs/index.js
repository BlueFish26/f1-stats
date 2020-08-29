import React, { Fragment } from 'react';
import './tab.css';

const Tabs = ({ children }) => {
  return (
    <div className="tab-container">
      <div className="tabs">{children}</div>
    </div>
  );
};

const Item = ({ tabName, itemKey, label, selected, children }) => {
  return (
    <Fragment>
      {selected && (
        <input type="radio" name={tabName} id={itemKey} defaultChecked />
      )}
      {!selected && <input type="radio" name={tabName} id={itemKey} />}
      <label htmlFor={itemKey}>{label}</label>
      <div className="tab">{children}</div>
    </Fragment>
  );
};

Tabs.Item = Item;

export default Tabs;
