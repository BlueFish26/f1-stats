import React, { Fragment } from 'react';
// import Driver from './Driver';

const Constructor = ({ constructor }) => {
  return (
    <Fragment>
      <div className="constructor-card">
        <div className="card">
          <div className="card-header">
            <h1>{constructor.Constructor.name}</h1>
          </div>
          <div className="card-body">
            <div className="info-section">
              <div className="info-line">
                <div className="label">Nationality:</div>
                <div className="detail">
                  {constructor.Constructor.nationality}
                </div>
              </div>
              <div className="info-line">
                <div className="label">Total Points:</div>
                <div className="detail">{constructor.points}</div>
              </div>
              <div className="info-line">
                <div className="label">Wins:</div>
                <div className="detail">{constructor.wins}</div>
              </div>
              <div className="info-line">
                <a
                  href={constructor.Constructor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Info
                </a>
              </div>
            </div>
            <img
              className="logo"
              src={`../../imgs/constructors/${constructor.Constructor.constructorId}.jpg`}
              alt=""
            />
            <img
              className="car-image"
              src={`../../imgs/constructors/${constructor.Constructor.constructorId}_car.png`}
              alt=""
            />
          </div>
          {/* {constructor.drivers.map((driver) => {
            return <Driver key={driver.driverId} driver={driver} />;
          })} */}
        </div>
      </div>
    </Fragment>
  );
};

export default Constructor;
