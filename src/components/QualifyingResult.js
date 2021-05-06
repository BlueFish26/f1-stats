import React, { Fragment } from "react";

const QualifyingResult = ({ results }) => {
  return (
    <Fragment>
      <h1>Qualifying Results</h1>
      {!results && <div>Loading...</div>}
      {results && results.length === 0 && <div>No Results yet</div>}
      {results && results.length > 0 && (
        <Fragment>
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Number</th>
                <th>Driver</th>
                <th>Car</th>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
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
                  <td>
                    {result.Q1 && <span className="time">{result.Q1}</span>}
                  </td>
                  <td>
                    {result.Q2 && <span className="time">{result.Q2}</span>}
                  </td>
                  <td>
                    {result.Q3 && <span className="time">{result.Q3}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      )}
    </Fragment>
  );
};

export default QualifyingResult;
