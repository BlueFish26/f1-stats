import F1API from "../data/F1API";
import DriverDataProvider from "../data/DriverDataProvider";

export const getDrivers = async (dispatch) => {
  try {
    const dataProvider = new DriverDataProvider(F1API);
    const data = await dataProvider.getDrivers();
    console.log("getDrivers", data);
    dispatch({ type: "SET_DRIVERS", drivers: data });
  } catch (error) {
    console.error(error);
  }
};

export const getDriverSeasonResults = async (driverId, dispatch) => {
  try {
    const dataProvider = new DriverDataProvider(F1API);
    const data = await dataProvider.getDriverSeasonResults(driverId);
    console.log("getDriverSeasonResults", data);
    dispatch({
      type: "SET_DRIVER_SEASON_RESULTS",
      results: { driverId, data },
    });
  } catch (error) {
    console.error(error);
  }
};
