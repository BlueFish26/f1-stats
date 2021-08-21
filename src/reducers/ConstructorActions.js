import F1API from "../data/F1API";
import ConstructorDataProvider from "../data/ConstructorDataProvider";

export const getConstructors = async (dispatch) => {
  try {
    //using class
    //const dataProvider = new ConstructorDataProvider(ErgastF1API);
    //using Revealing Module Pattern
    const dataProvider = ConstructorDataProvider;
    dataProvider.setApi(F1API);

    let data = [];
    if (localStorage.getItem("f1-constructors")) {
      data = JSON.parse(localStorage.getItem("f1-constructors"));
      dispatch({ type: "SET_CONSTRUCTORS", constructors: data });
      return;
    }
    if (data.length === 0) {
      //using class
      //await dataProvider.loadConstructorsWithDrivers("current");
      //const constructors = dataProvider.constructorStandings;

      //using Revealing Module Pattern
      const constructors = await dataProvider.loadConstructorsWithDrivers(
        "current"
      );
      console.log(
        "dataProvider.constructorStandings",
        dataProvider.constructorStandings
      );
      console.log(
        "👍 dataProvider.getConstructorStandings(),",
        dataProvider.getConstructorStandings()
      );

      //const constructors = await ErgastF1API.getConstructors();
      //localStorage.setItem("f1-constructors", JSON.stringify(constructors));
      console.log("SET_CONTRUCTORS", constructors);
      dispatch({ type: "SET_CONSTRUCTORS", constructors: constructors });
    }
  } catch (error) {
    console.error(error);
  }
};
