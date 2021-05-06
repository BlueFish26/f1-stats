import "./QualifyingResult.css";
const QualifyingResult = ({ results }) => {
  return (
    <>
      <h1>Qualifying Results</h1>
      {!results && <div>Loading...</div>}
      {results && results.length === 0 && <div>No Results yet</div>}
      {results && results.length > 0 && (
        <>
          <table className="quali-results">
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
                  <td>
                    <div className="driver-number">
                      <img
                        src={`../imgs/drivers/numbers/${result.Driver.driverId}.png`}
                        alt=""
                      />
                    </div>
                  </td>
                  <td>
                    <div className="driver">
                      <img
                        src={`../imgs/drivers/helmets/${result.Driver.driverId}.png`}
                        alt=""
                      />
                      {result.Driver.givenName} {result.Driver.familyName}
                    </div>
                  </td>
                  <td>
                    <div className="constructor">
                      <img
                        src={`../imgs/constructors/${result.Constructor.constructorId}_logo.png`}
                        alt=""
                      />
                      {result.Constructor.name}
                    </div>
                  </td>
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
        </>
      )}
    </>
  );
};

export default QualifyingResult;
