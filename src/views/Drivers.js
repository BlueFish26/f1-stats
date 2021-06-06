import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import DriverCard from "../components/DriverCard";
import { useF1Context } from "../contexts/F1Context";
import { getDrivers } from "../reducers/DriverActions";

const Drivers = () => {
  const [{ drivers }, dispatch] = useF1Context();
  const history = useHistory();
  useEffect(() => {
    async function loadDrivers() {
      await getDrivers(dispatch);
    }
    console.log("Loading Drivers...");
    loadDrivers();
  }, [dispatch]);
  const redirect = (path) => {
    console.log(path);
    history.push(path);
  };
  return (
    <>
      <h1>Drivers</h1>
      <div className="grid-container">
        {drivers &&
          drivers.map((driver) => {
            return (
              <div
                className="grid-item"
                key={driver.Driver.driverId}
                onClick={() => redirect(`/driver/${driver.Driver.driverId}`)}
              >
                <DriverCard driver={driver} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Drivers;
