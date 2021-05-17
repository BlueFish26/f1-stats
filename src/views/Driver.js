import "./Driver.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useF1Context } from "../contexts/F1Context";
import { getDrivers, getDriverSeasonResults } from "../reducers/f1Actions";
import Accordion from "../components/Accordion";
import DriverCardWide from "../components/DriverCardWide";
import DriverRaceGraph from "../components/DriverRaceGraph";
const Driver = () => {
  const { driverId } = useParams();
  const [{ drivers }, dispatch] = useF1Context();
  const [thisDriver, setThisDriver] = useState(null);

  useEffect(() => {
    let mounted = true;
    const loadDrivers = async () => {
      if (drivers.length === 0) {
        await getDrivers(dispatch);
      } else {
        if (thisDriver && !thisDriver.SeasonResults) {
          const currentDriver = drivers.filter(
            (driver) => driver.Driver.driverId === driverId
          )[0];
          if (currentDriver && !currentDriver.SeasonResults) {
            await getDriverSeasonResults(driverId, dispatch);
          }
        }
      }
    };
    loadDrivers();
    console.log("mounted", mounted);
    if (drivers && drivers.length > 0) {
      if (!thisDriver || (thisDriver && !thisDriver.SeasonResults)) {
        setThisDriver(
          drivers.filter((driver) => driver.Driver.driverId === driverId)[0]
        );
      }
    }
    return () => (mounted = false);
  }, [dispatch, driverId, drivers, thisDriver]);

  return (
    <div>
      <h1>Driver</h1>
      {thisDriver && (
        <>
          <DriverCardWide driver={thisDriver} />
          {/* Accordion showing driver's race result ,
              then inside the accordion, load the graph */}
          {thisDriver.SeasonResults && (
            <Accordion title="">
              {thisDriver.SeasonResults.map((race) => {
                const title = (
                  <>
                    <div className="race-item">
                      <img
                        src={`../imgs/flags/${race.Circuit.Location.country}.png`}
                        alt=""
                      />
                      <div className="race-circuit">
                        {`${race.raceName} - ${race.Circuit.circuitName}`}
                      </div>
                      <div className="driver-points">
                        {race.Results[0].position <= 3 && (
                          <i
                            className={`fa fa-trophy _${race.Results[0].position}`}
                            aria-hidden="true"
                          ></i>
                        )}
                        {` P${race.Results[0].position} - ${race.Results[0].points} pts`}
                      </div>
                    </div>
                  </>
                );
                return (
                  <Accordion.Item
                    key={race.round}
                    itemKey={race.round}
                    title={title}
                    onToggle={(e) => {
                      if (e.target.checked) {
                        console.log(race.round);
                      }
                    }}
                  >
                    <DriverRaceGraph
                      round={race.round}
                      driverId={thisDriver.Driver.driverId}
                    />
                  </Accordion.Item>
                );
              })}
            </Accordion>
          )}
        </>
      )}
    </div>
  );
};

export default Driver;
