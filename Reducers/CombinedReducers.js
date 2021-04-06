import { ZoomedMarkerReducer } from "./ZoomedMarkerReducer";
import { MarkerReducer } from "./MarkerReducer";
import { combineReducers } from "redux";
//import { GameReducer } from './Gamereducer';

export const StoreFront = combineReducers({
  zoomedMarker: ZoomedMarkerReducer,
  markers: MarkerReducer,
});
