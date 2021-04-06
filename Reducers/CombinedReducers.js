import { ZoomedMarkerReducer } from "./ZoomedMarkerReducer";
import { MarkerReducer } from "./MarkerReducer";
import { createStore, combineReducers } from "redux";

export const StoreFront = combineReducers({
  zoomedMarker: ZoomedMarkerReducer,
  markers: MarkerReducer,
});
