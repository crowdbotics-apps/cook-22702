import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2174898Reducer from '../features/SignIn2174898/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2174898: SignIn2174898Reducer,

});