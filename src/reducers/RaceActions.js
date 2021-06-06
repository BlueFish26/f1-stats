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

    if (data.length > 0) {
      //localStorage.setItem("f1-races", JSON.stringify(data));
      dispatch({ type: "SET_RACES", races: data });
    }
  } catch (error) {
    console.error(error);
  }
};
export const setRaceResult = async (round, dispatch) => {
  try {
    const dataProvider = new RaceDataProvider(F1API);
    const race = await dataProvider.getRaceResult(round);
    dispatch({ type: "SET_RACE_RESULT", round: round, results: race });
  } catch (error) {
    console.error(error);
  }
};
export const setQualifyingResult = async (round, dispatch) => {
  try {
    const dataProvider = new RaceDataProvider(F1API);
    const data = await dataProvider.getQualifyingResults(round);
    dispatch({ type: "SET_QUALIFYING_RESULT", round: round, results: data });
  } catch (error) {
    console.error(error);
  }
};
