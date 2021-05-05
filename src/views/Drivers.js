import { useEffect } from "react";
import DriverCard from "../components/DriverCard";
import DriverRaceGraph from "../components/DriverRaceGraph";
import { useF1Context } from "../contexts/F1Context";
import { getDrivers } from "../reducers/f1Actions";

const Drivers = () => {
  const [{ drivers }, dispatch] = useF1Context();

  useEffect(() => {
    async function loadDrivers() {
      await getDrivers(dispatch);
    }
    console.log("Loading Drivers...");
    loadDrivers();
  }, [dispatch]);
  return (
    <>
      <h1>Drivers</h1>
      <div className="grid-container">
        {drivers &&
          drivers.map((driver) => {
            return (
              <div className="grid-item" key={driver.Driver.driverId}>
                <DriverCard driver={driver} />
              </div>
            );
          })}
      </div>

      <DriverRaceGraph />
    </>
  );
};

export default Drivers;
