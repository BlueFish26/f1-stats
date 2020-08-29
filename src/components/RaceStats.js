import React, { Fragment } from 'react';
import Tabs from './Tabs';
import RaceResult from './RaceResult';
import QualifyingResult from './QualifyingResult';

const RaceStats = ({ race }) => {
  const raceResultId = `tab-result-${race.round}`;
  const qualiResultId = `tab-quali-${race.round}`;
  const mainTabName = `tabs-${race.round}`;

  return (
    <Fragment>
      {console.log('Render RaceStats...')}
      <img
        style={{ height: '100px' }}
        src={`../../imgs/circuits/${race.Circuit.circuitId}.png`}
        alt=""
      />
      <Tabs>
        <Tabs.Item
          tabName={mainTabName}
          itemKey={raceResultId}
          label="Race Results"
          selected={true}
        >
          <RaceResult results={race.Results} />
        </Tabs.Item>
        <Tabs.Item
          tabName={mainTabName}
          itemKey={qualiResultId}
          label="Qualifying Results"
          selected={false}
        >
          <QualifyingResult results={race.QualifyingResults} />
        </Tabs.Item>
      </Tabs>
    </Fragment>
  );
};

export default RaceStats;
