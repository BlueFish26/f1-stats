import React, { Fragment } from 'react';
import './accordion.css';

const Accordion = ({ title, children }) => {
  return (
    <Fragment>
      <div className="accordion-container">
        <div className="row">
          <div className="col">
            <h2>{title}</h2>
            <div className="accordion">{children}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const Item = ({ itemKey, title, onToggle, children }) => {
  return (
    <div className="accordion-item">
      <input type="checkbox" id={itemKey} onChange={onToggle} />
      <label className="accordion-item-label" htmlFor={itemKey}>
        {title}
      </label>
      <div className="accordion-content">{children}</div>
    </div>
  );
};

Accordion.Item = Item;

export default Accordion;

/*

 {races &&
                races.map((race) => {
                  return (
                    <div className="accordion-item" key={race.round}>
                      <input type="checkbox" id={race.round} />
                      <label
                        className="accordion-item-label"
                        htmlFor={race.round}
                      >
                        {race.raceName} - {race.Circuit.circuitName}
                      </label>
                      <div className="accordion-content">
                        <Race race={race} />
                      </div>
                    </div>
                  );
                })}

*/
