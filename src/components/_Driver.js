import React, { Fragment } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Driver = ({ driver }) => {
  const data = [
    {
      name: 'Austrian Grand Prix',
      pos: 1,
    },
    {
      name: 'Styrian GP',
      pos: 4,
    },
    {
      name: 'Hungarian Grand Prix',
      pos: 2,
    },
  ];
  return (
    <Fragment>
      <div className="driver-card">
        <div className="driver-card-body">
          <div className="driver-image">
            <img src={`../../imgs/drivers/${driver.code}.jpg`} alt="" />
          </div>
          <div className="driver-info">
            <div>
              {driver.code} - {driver.permanentNumber}
            </div>
            <div>
              {driver.givenName} {driver.familyName}
            </div>
            <div>
              <span>Date of Birth: </span>
              {driver.dateOfBirth}
            </div>
            <div>
              <span>Nationality: </span>
              {driver.nationality}
            </div>
          </div>
          <div className="driver-graph">
            <div>
              <LineChart
                width={500}
                height={200}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  type="number"
                  interval="preserveStart"
                  reversed={true}
                  domain={[1, 20]}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pos"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Driver;
