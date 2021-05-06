import "./RaceResult.css";
const RaceResult = ({ results }) => {
  return (
    <>
      <h1>Race Results</h1>
      {!results && <div>Loading...</div>}
      {results && results.length === 0 && <div>No Results yet</div>}
      {results && results.length > 0 && (
        <>
          <div style={{ overflowX: "scroll" }}>
            <table className="race-results">
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
        </>
      )}
    </>
  );
};

export default RaceResult;
