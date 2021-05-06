import "./Driver.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useF1Context } from "../contexts/F1Context";
import DriverRaceGraph from "../components/DriverRaceGraph";
import { getDrivers } from "../reducers/f1Actions";
import DriverCard from "../components/DriverCard";
const Driver = () => {
  const { driverId } = useParams();
  const [{ drivers }, dispatch] = useF1Context();
  const [thisDriver, setThisDriver] = useState(null);

  useEffect(() => {
    const loadDrivers = async () => {
      if (drivers.length === 0) {
        await getDrivers(dispatch);
      }
    };
    loadDrivers();
    if (drivers && drivers.length > 0) {
      if (!thisDriver) {
        setThisDriver(
          drivers.filter((driver) => driver.Driver.driverId === driverId)[0]
        );
        console.log("thisDriver", thisDriver);
      }
    }
  }, [dispatch, driverId, drivers, thisDriver]);

  return (
    <div>
      <h1>Driver</h1>
      {thisDriver && (
        <>
          <div className="card-wrapper">
            <DriverCard driver={thisDriver} />
          </div>
          TODO: Add Accordion here, showing driver's race result , then inside
          the accordion, load the graph
          <div className="driver-results">
            <DriverRaceGraph />
          </div>
        </>
      )}
    </div>
  );
};

export default Driver;
