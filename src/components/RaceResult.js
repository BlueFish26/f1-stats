import React, { Fragment } from "react";

const RaceResult = ({ results }) => {
  return (
    <Fragment>
      <h1>Race Results</h1>
      {!results && <div>Loading...</div>}
      {results && results.length === 0 && <div>No Results yet</div>}
      {results && results.length > 0 && (
        <Fragment>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Number</th>
                  <th>Driver</th>
                  <th>Car</th>
                  <th>Laps</th>
                  <th>Time</th>
                  <th>FastestLap</th>
                  <th>AVG Speed</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.number}>
                    <td>{result.position}</td>
                    <td>{result.number}</td>
                    <td>
                      {result.Driver.givenName} {result.Driver.familyName}
                    </td>
                    <td>{result.Constructor.name}</td>
                    <td>{result.laps}</td>
                    <td>
                      <span className="time">
                        {result.Time ? result.Time.time : "DNF"}
                      </span>
                    </td>
                    <td>
                      <span className="time">
                        {result.FastestLap
                          ? result.FastestLap.Time.time
                          : "NO TIME SET"}
                      </span>
                    </td>
                    <td>
                      <span className="time">
                        {result.FastestLap
                          ? result.FastestLap.AverageSpeed.speed
                          : "NO TIME SET"}{" "}
                        {result.FastestLap
                          ? result.FastestLap.AverageSpeed.units
                          : ""}
                      </span>
                    </td>
                    <td>{result.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default RaceResult;
