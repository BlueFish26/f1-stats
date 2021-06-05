import F1API from "../data/F1API";
import RaceDataProvider from "../data/RaceDataProvider";

export const getRaces = async (dispatch) => {
  try {
    if (localStorage.getItem("f1-races")) {
      const data = JSON.parse(localStorage.getItem("f1-races"));
      dispatch({ type: "SET_RACES", races: data });
      return;
    }
    const dataProvider = new RaceDataProvider(F1API);
    await dataProvider.loadRaces("current");
    const data = dataProvider.races;
    console.log(data);
    //const data = await F1API.getRaces();
    if (data.length > 0) {
      localStorage.setItem("f1-races", JSON.stringify(data));
      dispatch({ type: "SET_RACES", races: data });
    }
  } catch (error) {
    console.error(error);
  }
};
