export const initialState = {
  user: null,
  races: [],
  constructors: [],
  drivers: [],
};
const f1Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RACES':
      return { ...state, races: action.races };
    case 'SET_RACE_RESULT':
      if (action.results && state.races) {
        /*
        1.) Find Race By Round
        2.) Update Race with Results
        3.) Create/Update new Array
        */
        const race_round = action.round;
        const updatedRaces = state.races.reduce((initial, current) => {
          if (current.round === race_round) {
            current.Results = action.results;
          }
          initial.push(current);
          return initial;
        }, []);
        return { ...state, races: updatedRaces };
      }
      return state;
    case 'SET_QUALIFYING_RESULT':
      if (action.results && state.races) {
        /*
          1.) Find Race By Round
          2.) Update Race with Results
          3.) Create/Update new Array
          */
        const race_round = action.round;
        const updatedRaces = state.races.reduce((initial, current) => {
          if (current.round === race_round) {
            current.QualifyingResults = action.results;
          }
          initial.push(current);
          return initial;
        }, []);
        return { ...state, races: updatedRaces };
      }
      return state;
    case 'SET_RACE_LAP_TIMES':
      if (action.results && state.races) {
        /*
          1.) Find Race By Round
          2.) Create Drivers array, if not exist
          3.) Update Drivers array with Results
          */
        const race_round = action.round;
        const updatedRaces = state.races.reduce((initial, current) => {
          if (current.round === race_round) {
            current.DriverLapTimes = action.data;
          }
          initial.push(current);
          return initial;
        }, []);
        return { ...state, races: updatedRaces };
      }
      return state;
    case 'SET_CONSTRUCTORS':
      return { ...state, constructors: action.constructors };
    default:
      return state;
  }
};

export default f1Reducer;
